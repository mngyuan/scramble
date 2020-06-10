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
        <div className="m-24 w-6/12">
          <Link as={`/blog/${post.slug}`} href="/blog/[slug]">
            <a className="hover:underline">
              <h2 className="font-bold">{post.title}</h2>
            </a>
          </Link>
          <h3 className="text-gray mb-6">
            <DateFormatter dateString={post.date} />
          </h3>
          <p>{post.excerpt}</p>
        </div>
      ))}
    </div>
  </Layout>
);

export async function getStaticProps() {
  return {
    props: {
      allPosts: getAllPosts(['title', 'date', 'slug', 'excerpt', 'coverImage']),
    },
  };
}

export default Blog;
