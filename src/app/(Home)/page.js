import Post from "./component/Post";
import PostForm from "./component/PostForm";

export default function Home() {
  const posts = Array.from({ length: 20 }, (_, i) => i);
  return (
    <>
      <PostForm />
      <Post post={posts} />
    </>
  );
}
