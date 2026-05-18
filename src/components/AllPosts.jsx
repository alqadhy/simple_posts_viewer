// Components
import Post from "./Post";

// Contexts
import { allPostsContext } from "../contexts/allPostsContext";

// Hooks
import { useContext } from "react";

function AllPosts() {
  const { allPosts } = useContext(allPostsContext);

  return (
    <section className="all-posts">
      <h2 className="mb-5 text-xl md:text-2xl font-bold">All Posts</h2>
      <div className="posts grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-4">
        {allPosts.map((post) => {
          return (
            <Post
              key={post.id}
              id={post.id}
              title={post.title}
              body={post.body}
            />
          );
        })}
      </div>
    </section>
  );
}

export default AllPosts;
