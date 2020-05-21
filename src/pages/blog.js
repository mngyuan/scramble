import FadeInGroup from '../components/FadeInGroup';
import Layout from '../components/Layout';

import POSTS from '../blog.yaml';

const Blog = (props) => (
  <Layout>
    <ul>
      <FadeInGroup>
        {Object.entries(POSTS).map(([postslug, post]) => (
          <div className="post">
            <h1 className="post-title">{post.name}</h1>
            <h2 className="post-date">{post.date}</h2>
          </div>
        ))}
      </FadeInGroup>
    </ul>
  </Layout>
);

console.log(POSTS);

export default Blog;
