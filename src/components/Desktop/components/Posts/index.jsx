import Post from "../Post";
import "./index.scss";

export default function Posts({ posts }) {
  return (
    <div className="posts">
      {posts.slice(0).reverse().map((p) => (
        <Post post={p} />
      ))}
    </div>
  );
}