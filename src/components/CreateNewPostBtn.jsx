// Sweet Alert2
import Swal from "sweetalert2";

// React Toastify
import { toast } from "react-toastify";

// Axios
import axios from "axios";

// Contexts
import { allPostsContext } from "../contexts/allPostsContext";
import { loadingContext } from "../contexts/loadingContext";
import { showEmptyParagraphContext } from "../contexts/showEmptyParagraphContext";

// Hooks
import { useContext } from "react";

function CreateNewPostBtn() {
  const { setAllPosts } = useContext(allPostsContext);
  const { setShowEmptyParagraph } = useContext(showEmptyParagraphContext);
  const { setIsLoading } = useContext(loadingContext);

  async function handelCreateNewPost() {
    const result = await Swal.fire({
      title: "Create New Post",
      html: `
        <input
          id="post-title"
          class="swal2-input"
          placeholder="Post title"
        />

        <textarea
          id="post-body"
          class="swal2-textarea"
          placeholder="Post body"
        ></textarea>
      `,
      focusConfirm: false,
      showCancelButton: true,
      confirmButtonText: "Create",
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

        const response = await axios.post(
          "https://jsonplaceholder.typicode.com/posts",
          { id: crypto.randomUUID(), ...result.value },
        );

        setAllPosts((prevPosts) => [response.data, ...prevPosts]);
        setShowEmptyParagraph(false);

        toast.success("Post has been created successfully!");
      } catch (error) {
        toast.error("Something went wrong!");
      } finally {
        setIsLoading(false);
      }
    }
  }

  return (
    <button
      title="Create a new post"
      className="bg-theme mb-8 pt-3 pr-8 pb-3 pl-8 rounded-sm text-white font-bold cursor-pointer duration-(--fast-duration) hover:bg-theme-dark"
      onClick={handelCreateNewPost}
    >
      Create a new post
    </button>
  );
}

export default CreateNewPostBtn;
