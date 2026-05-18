// Contexts
import { allPostsContext } from "../contexts/allPostsContext";
import { showEmptyParagraphContext } from "../contexts/showEmptyParagraphContext";
import { loadingContext } from "../contexts/loadingContext";

// Hooks
import { useContext } from "react";

// Axios
import axios from "axios";

// Sweet Alert2
import Swal from "sweetalert2";

// React Toastify
import { toast } from "react-toastify";

function Post({ id, title, body }) {
  const { allPosts, setAllPosts } = useContext(allPostsContext);
  const { setShowEmptyParagraph } = useContext(showEmptyParagraphContext);
  const { setIsLoading } = useContext(loadingContext);

  async function handelPostDelete() {
    const userDecision = await Swal.fire({
      title: "Confirmation!",
      text: "Are you sure you want to delete this post?",
      icon: "warning",
      confirmButtonText: "Delete",
      showCancelButton: true,
      cancelButtonText: "Cancel",
      customClass: {
        confirmButton:
          "bg-red text-white px-5 py-2 rounded-sm mr-3 hover:bg-red/65 duration-(--fast-duration) cursor-pointer",

        cancelButton:
          "bg-dark-gray text-white px-5 py-2 rounded-sm hover:bg-dark-gray/65 duration-(--fast-duration) cursor-pointer",
      },
      buttonsStyling: false,
    });

    if (userDecision.isConfirmed) {
      try {
        setIsLoading(true);

        const response = await axios.delete(
          `https://jsonplaceholder.typicode.com/posts/${id}`,
        );

        setAllPosts(allPosts.filter((post) => post.id !== id));
        toast.success("Post deleted successfully!");

        if (allPosts.length <= 1) {
          setShowEmptyParagraph(true);
        }
      } catch (error) {
        toast.error("Something went wrong!");
      } finally {
        setIsLoading(false);
      }
    }
  }

  async function handelPostEdit() {
    const result = await Swal.fire({
      title: "Edit Post",
      html: `
            <input
              id="post-title"
              class="swal2-input"
              placeholder="Post title"
              value="${title}"
            />
    
            <textarea
              id="post-body"
              class="swal2-textarea"
              placeholder="Post body"
            >${body}</textarea>
          `,
      focusConfirm: false,
      showCancelButton: true,
      confirmButtonText: "Edit",
      customClass: {
        confirmButton:
          "bg-theme text-white px-5 py-2 rounded-sm mr-3 hover:bg-theme/65 duration-(--fast-duration) cursor-pointer",

        cancelButton:
          "bg-dark-gray text-white px-5 py-2 rounded-sm hover:bg-dark-gray/65 duration-(--fast-duration) cursor-pointer",
      },
      buttonsStyling: false,

      preConfirm: () => {
        const title = document.getElementById("post-title").value;
        const body = document.getElementById("post-body").value;

        if (!title || !body) {
          Swal.showValidationMessage("Please fill all fields");
          return false;
        }

        return {
          title,
          body,
        };
      },
    });

    if (result.isConfirmed) {
      try {
        setIsLoading(true);

        const response = await axios.put(
          `https://jsonplaceholder.typicode.com/posts/${id}`,
          result.value,
        );

        setAllPosts((prev) => prev.map((p) => (p.id == id ? result.value : p)));

        toast.success("Post data has been updated successfully!");
      } catch (error) {
        toast.error("Something went wrong!");
      } finally {
        setIsLoading(false);
      }
    }
  }

  return (
    <article className="bg-white p-4 rounded-sm shadow-(--shadow-card) border-b-4 border-theme">
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="mt-2 mb-3 text-dark-gray">{body}</p>
      <div className="buttons flex wrap items-center gap-4">
        <button
          title="Edit"
          className="edit text-white font-medium pt-1 pr-4 pb-1 pl-4 bg-theme cursor-pointer duration-(--fast-duration) hover:bg-theme/65"
          onClick={handelPostEdit}
        >
          Edit
        </button>
        <button
          title="Delete"
          className="delete text-white font-medium pt-1 pr-4 pb-1 pl-4 bg-red cursor-pointer duration-(--fast-duration) hover:bg-red/65"
          onClick={handelPostDelete}
        >
          Delete
        </button>
      </div>
    </article>
  );
}

export default Post;
