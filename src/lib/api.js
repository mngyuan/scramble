import fs from 'fs';
import matter from 'gray-matter';
import glob from 'glob';

export function getPostSlugs() {
  return glob
    .sync('src/_posts/**/*.md')
    .map((path) => path.split('/').slice(-1)[0].split('.')[0]);
}

export async function getPostBySlug(slug) {
  const importedData = await import(`../_posts/${slug}.md`);
  const data = matter(importedData.default);

  return {
    fileRelativePath: `src/_posts/${slug}.md`,
    frontmatter: data.data,
    markdownBody: data.content,
  };
}

export async function getAllPosts() {
  const slugs = await getPostSlugs();
  const posts = await Promise.all(slugs.map((slug) => getPostBySlug(slug)));
  // sort posts by date in descending order
  return posts.sort((post1, post2) =>
    post1.frontmatter.date > post2.frontmatter.date ? '-1' : '1',
  );
}
