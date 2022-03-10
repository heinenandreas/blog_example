import { PostList } from "../components/PostList/PostList";
import { getSortedPostsData } from "../lib/posts";
import styled from "styled-components";

export default function Home({ posts }) {
  console.log(posts);
  return (
    <>
      <Header>
        <Headline>My Blog</Headline>
        <p>7 Common Myths About Turtles</p>
      </Header>
      <Blogcontainer>
        <h2>Posts</h2>
        <PostList posts={posts} />
      </Blogcontainer>
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

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f4d35e;
  position: fixed;
  top: 0;
  height: 200px;
  width: 1000 px;
`;

const Headline = styled.h1`
  color: #0d3b66;
`;

const Blogcontainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
