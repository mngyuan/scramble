import {useRouter} from 'next/router';
import ErrorPage from 'next/error';
import Head from 'next/head';
import {usePlugins} from 'tinacms';
//import {MarkdownFieldPlugin} from 'react-tinacms-editor';
//import {markdownForm} from 'next-tinacms-markdown';
import ReactMarkdown from 'react-markdown';
import {getPostBySlug, getAllPosts} from '../../lib/api';
import Layout from '../../components/Layout';
import DateFormatter from '../../components/DateFormatter';

import markdownStyles from './markdown-styles.module.css';

function Post({markdownFile}) {
  const router = useRouter();
  //usePlugins([MarkdownFieldPlugin]);

  if (!router.isFallback && !markdownFile?.frontmatter?.slug) {
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
              <title>{markdownFile.frontmatter.title} | mngyuan blog</title>
            </Head>
            <h1>{markdownFile.frontmatter.title}</h1>
            <DateFormatter dateString={markdownFile.frontmatter.date} />
            <div className="max-w-2xl mx-auto">
              <ReactMarkdown>{markdownFile.markdownBody}</ReactMarkdown>
            </div>
          </article>
        </>
      )}
    </Layout>
  );
}

const formOptions = {};

//export default markdownForm(Post, formOptions);
export default Post;

export async function getStaticProps({params}) {
  const markdownFile = await getPostBySlug(params.slug);

  return {
    props: {
      markdownFile,
    },
  };
}

export async function getStaticPaths() {
  const posts = await getAllPosts();

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.frontmatter.slug,
        },
      };
    }),
    fallback: false,
  };
}
