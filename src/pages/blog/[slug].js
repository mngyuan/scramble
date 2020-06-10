import {useState, useEffect, useMemo} from 'react';
import {useRouter} from 'next/router';
import ErrorPage from 'next/error';
import Head from 'next/head';
import {useForm, usePlugin, usePlugins} from 'tinacms';
import {MarkdownFieldPlugin} from 'react-tinacms-editor';
import {getPostBySlug, getAllPosts} from '../../lib/api';
import markdownToHtml from '../../lib/markdownToHtml';
import Layout from '../../components/Layout';

import markdownStyles from './markdown-styles.module.css';

export default function Post({post: initialPost, morePosts, preview}) {
  const router = useRouter();
  const formConfig = {
    id: initialPost.slug,
    label: 'Blog Post',
    initialValues: initialPost,
    onSubmit: (values) => {
      alert(`Submitting ${values.title}`);
    },
    fields: [
      {
        name: 'title',
        label: 'Post Title',
        component: 'text',
      },
      {
        name: 'rawMarkdownBody',
        label: 'Content',
        component: 'markdown',
      },
    ],
  };
  const [post, form] = useForm(formConfig);
  usePlugin(form);
  usePlugins(MarkdownFieldPlugin);
  const [htmlContent, setHtmlContent] = useState(post.content);
  const initialContent = useMemo(() => post.rawMarkdownBody, []);
  useEffect(() => {
    if (initialContent == post.rawMarkdownBody) return;
    markdownToHtml(post.rawMarkdownBody).then(setHtmlContent);
  }, [post.rawMarkdownBody]);

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Layout>
      {router.isFallback ? (
        <h1 className="post-title">Loading…</h1>
      ) : (
        <>
          <article className="mb-32">
            <Head>
              <title>{post.title} | mngyuan blog</title>
            </Head>
            <h1>{post.title}</h1>
            <time>{post.date}</time>
            <div className="max-w-2xl mx-auto">
              <div
                className={markdownStyles['markdown']}
                dangerouslySetInnerHTML={{__html: htmlContent}}
              />
            </div>
          </article>
        </>
      )}
    </Layout>
  );
}

export async function getStaticProps({params}) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'content',
    'ogImage',
    'coverImage',
  ]);
  const content = await markdownToHtml(post.content || '');

  return {
    props: {
      post: {
        ...post,
        content,
        rawMarkdownBody: post.content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug']);

  return {
    paths: posts.map((posts) => {
      return {
        params: {
          slug: posts.slug,
        },
      };
    }),
    fallback: false,
  };
}
