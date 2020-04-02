import {useRouter} from 'next/router';
import Head from 'next/head';

import Layout from '../../components/Layout';

import POSTS from '../../blog.yaml';

const Block = ({block}) => {
  const {type} = block;
  switch (type) {
    case 'text':
      return <p>{block.content}</p>;
      break;
    case 'image':
      return <img src={block.src} />;
      break;
    default:
      return <>{block.content}</>;
  }
};

const Post = () => {
  const router = useRouter();
  const {postslug} = router.query;
  const post = POSTS[postslug];

  return post ? (
    <>
      <Layout>
        <article>
          <h1 className="post-title">{post.name}</h1>
          <h3 className="post-date">{post.date}</h3>
          {post.content.map(block => (
            <Block block={block} />
          ))}
        </article>
      </Layout>
      <Head>
        <title key="title">{post.name} | @mngyuan</title>
        <meta
          property="og:description"
          content={post.content.find(block => block.type === 'text').content}
          key="og-description"
        />
        <meta property="og:title" content={post.name} key="og-title" />
      </Head>
    </>
  ) : (
    <Layout />
  );
};

export default Post;
