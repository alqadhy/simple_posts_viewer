// Components
import Header from "./components/Header";
import MainContainer from "./components/MainContainer";
import CreateNewPostBtn from "./components/CreateNewPostBtn";
import AllPosts from "./components/AllPosts";
import EmptyParagraph from "./components/EmptyParagraph";
import Footer from "./components/Footer";

// React Toastify
import { ToastContainer } from "react-toastify";

// Contexts
import { allPostsContext } from "./contexts/allPostsContext";
import { showEmptyParagraphContext } from "./contexts/showEmptyParagraphContext";
import { loadingContext } from "./contexts/loadingContext";

// Hooks
import { useState, useEffect } from "react";

// Axios
import axios from "axios";

// React Toastify
import { toast } from "react-toastify";

// Spinner Icon
import { CgSpinner } from "react-icons/cg";

function App() {
  const [allPosts, setAllPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showEmptyParagraph, setShowEmptyParagraph] = useState(false);

  useEffect(() => {
    async function fetchPosts() {
      try {
        setIsLoading(true);

        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts?_limit=5",
        );

        setAllPosts(response.data);
      } catch (error) {
        toast.error("Something  went wrong!");
        setShowEmptyParagraph(true);
      } finally {
        setIsLoading(false);
      }
    }

    fetchPosts();
  }, []);

  return (
    <>
      <Header />
      <main className="page pt-15 pb-15">
        <MainContainer>
          <allPostsContext.Provider value={{ allPosts, setAllPosts }}>
            <loadingContext.Provider value={{ isLoading, setIsLoading }}>
              <showEmptyParagraphContext.Provider
                value={{ showEmptyParagraph, setShowEmptyParagraph }}
              >
                <CreateNewPostBtn />
                {showEmptyParagraph ? (
                  <EmptyParagraph />
                ) : isLoading ? (
                  <CgSpinner className="animate-spin text-3xl" />
                ) : (
                  <AllPosts />
                )}
              </showEmptyParagraphContext.Provider>
            </loadingContext.Provider>
          </allPostsContext.Provider>
        </MainContainer>
      </main>
      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;
