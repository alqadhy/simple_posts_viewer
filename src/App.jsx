// Components
import Header from "./components/Header";
import MainContainer from "./components/MainContainer";
import CreateNewPostBtn from "./components/CreateNewPostBtn";
import AllPosts from "./components/AllPosts";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <main className="page pt-15 pb-15">
        <MainContainer>
          <CreateNewPostBtn />
          <AllPosts />
        </MainContainer>
      </main>
      <Footer />
    </>
  );
}

export default App;
