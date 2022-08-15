---
title: Remix JS
description: Remix JS el famoso FullStack Framework
miniature: remix-js.png
slug: remix-js-el-famoso-fs-fw
text: Remix el FrameWork Definitivo
---

# Explicación de que es Remix y su funcionamiento.

```jsx
import { useLoaderData } from "@remix-run/react";
import Layout from "~/layouts/Layout";
import { PostItem, NoPost } from "~/components/blog";
import { getPost } from "~/api";

export default function Category() {
  const { category, posts } = useLoaderData();

  return (
    <Layout>
      <div className="grid grid-cols-2 gap-2 mt-10">
        {posts.map((post, index) => (
          <PostItem key={index} post={post} category={category} />
        ))}
      </div>
      {[...posts].length < 1 && <NoPost />}
    </Layout>
  );
}

export const loader = async ({ params }) => {
  const { category } = params;
  const posts = await getPost(category);

  return {
    category,
    posts,
  };
};
```
