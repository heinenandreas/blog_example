import { PostList } from "../components/PostList/PostList";
import { getSortedPostsData } from "../lib/posts";

export default function Home({ posts }) {
  console.log(posts);
  return (
    <>
      <h1>My Blog</h1>
      <p>Lorem Ipsum…</p>
      <h2>Posts</h2>
      <PostList posts={posts} />
    </>
  );
}

export async function getStaticProps() {
  const posts = getSortedPostsData();
  //somehow get the data!
  return {
    props: {
      posts: posts,
    },
  };
}
