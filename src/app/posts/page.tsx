import FilterablePosts from "@/components/FilterablePosts";
import { getAllPosts } from "@/service/posts";
import React from "react";

async function page() {
  const posts = await getAllPosts();
  const categories = [...new Set(posts.map((post) => post.category))];

  return <FilterablePosts posts={posts} categories={categories} />;
}

export default page;
