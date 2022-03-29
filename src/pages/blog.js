import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';
import DateFormatter from '../components/DateFormatter';
import {getAllPosts} from '../lib/api';

const Blog = ({allPosts}) => (
  <Layout>
    <Head>
      <title>mngyuan blog</title>
    </Head>
    <div className="flex flex-row">
      {allPosts.map((post) => (
        <div className="m-24 w-6/12" key={post.slug}>
          <Link as={`/blog/${post.frontmatter.slug}`} href="/blog/[slug]">
            <a className="hover:underline">
              <h2 className="font-bold">{post.frontmatter.title}</h2>
            </a>
          </Link>
          <h3 className="text-gray mb-6">
            <DateFormatter dateString={post.frontmatter.date} />
          </h3>
          <p>{post.frontmatter.excerpt}</p>
        </div>
      ))}
    </div>
  </Layout>
);

export async function getStaticProps() {
  return {
    props: {
      allPosts: await getAllPosts(),
    },
  };
}

export default Blog;
