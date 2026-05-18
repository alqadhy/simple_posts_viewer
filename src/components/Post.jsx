function Post({ title, body }) {
  return (
    <article className="bg-white p-4 rounded-sm shadow-(--shadow-card) border-b-4 border-theme">
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="mt-2 mb-3 text-dark-gray">{body}</p>
      <div className="buttons flex wrap items-center gap-4">
        <button
          title="Edit"
          className="edit text-white font-medium pt-1 pr-4 pb-1 pl-4 bg-theme cursor-pointer duration-(--fast-duration) hover:bg-theme/65"
        >
          Edit
        </button>
        <button
          title="Delete"
          className="delete text-white font-medium pt-1 pr-4 pb-1 pl-4 bg-red cursor-pointer duration-(--fast-duration) hover:bg-red/65"
        >
          Delete
        </button>
      </div>
    </article>
  );
}

export default Post;
