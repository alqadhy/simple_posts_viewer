// Components
import Post from "./Post";

const allPosts = [
  {
    id: 1,
    title: "Post One",
    body: "this is post one bodythis is post one bodythis is post one bodythis is post one bodythis is post one bodythis is post one bodythis is post one bodythis is post one bodythis is post one bodythis is post one bodythis is post one bodythis is post one body",
  },
  {
    id: 2,
    title: "Post Two",
    body: "this is post two bodythis is post two bodythis is post two bodythis is post two bodythis is post two bodythis is post two bodythis is post two bodythis is post two bodythis is post two bodythis is post two bodythis is post two bodythis is post two body",
  },
  {
    id: 3,
    title: "Post Three",
    body: "this is post three bodythis is post three bodythis is post three bodythis is post three bodythis is post three bodythis is post three bodythis is post three bodythis is post three bodythis is post three bodythis is post three bodythis is post three bodythis is post three body",
  },
  {
    id: 4,
    title: "Post Four",
    body: "this is post four bodythis is post four bodythis is post four bodythis is post four bodythis is post four bodythis is post four bodythis is post four bodythis is post four bodythis is post four bodythis is post four bodythis is post four bodythis is post four body",
  },
  {
    id: 5,
    title: "Post Five",
    body: "this is post five bodythis is post five bodythis is post five bodythis is post five bodythis is post five bodythis is post five bodythis is post five bodythis is post five bodythis is post five bodythis is post five bodythis is post five bodythis is post five body",
  },
];

function AllPosts() {
  return (
    <section className="all-posts">
      <h2 className="mb-5 text-xl md:text-2xl font-bold">All Posts</h2>
      <div className="posts grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-4">
        {allPosts.map((post) => {
          return <Post key={post.id} title={post.title} body={post.body} />;
        })}
      </div>
    </section>
  );
}

export default AllPosts;
