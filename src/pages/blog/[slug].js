import React from 'react';
import {useRouter} from 'next/router';
import ErrorPage from 'next/error';
import Head from 'next/head';
import md from 'markdown-it';
import {getPostBySlug, getAllPosts} from '../../lib/api';
import Layout from '../../components/Layout';
import DateFormatter from '../../components/DateFormatter';

function Post({markdownFile}) {
  const router = useRouter();

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
            <div className="max-w-2xl mx-auto mb-4">
              <a href="../">←</a>
            </div>
            <div className="markdown prose max-w-2xl mx-auto">
              <div className="mb-32">
                <DateFormatter dateString={markdownFile.frontmatter.date} />
              </div>
              <div
                dangerouslySetInnerHTML={{
                  __html: md({html: true}).render(markdownFile.markdownBody),
                }}
              />
            </div>
          </article>
        </>
      )}
    </Layout>
  );
}

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
