import { PostList } from "../components/PostList/PostList";
import { getSortedPostsData } from "../lib/posts";
import styled from "styled-components";

export default function Home({ posts }) {
  console.log(posts);
  return (
    <Complete>
      <Header>
        <Headline>My Blog</Headline>
        <p>7 Common Myths About Turtles</p>
      </Header>
      <Blogcontainer>
        <PostLine>Posts</PostLine>
        <PostList posts={posts} />
      </Blogcontainer>
      <Footer></Footer>
    </Complete>
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

const Complete = styled.div`
  margin: 0;
  height: 100% vh;
  width: 100% vw;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f4d35e;
  border-bottom: 2px solid #0d3b66;
  top: 0;
  height: 150px;
  width: 100%;
`;

const Headline = styled.h1`
  color: #0d3b66;
`;

const PostLine = styled.h2`
  color: #0d3b66;
`;

const Blogcontainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Footer = styled.div`
  background-color: #f4d35e;
  position: fixed;
  bottom: 0;
  height: 100px;
  width: 100%;
  border-top: 2px solid #0d3b66;
`;
