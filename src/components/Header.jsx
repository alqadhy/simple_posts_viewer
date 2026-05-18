// Logo
import logo from "../assets/imgs/post.png";

// Components
import MainContainer from "./MainContainer";

function Header() {
  return (
    <header className="bg-theme pt-4 pb-4">
      <MainContainer>
        <h1 className="text-white text-center text-2xl md:text-3xl font-bold">
          Simple Posts Viwer
        </h1>
        <img
          src={logo}
          alt="Logo"
          title="posts viewer"
          className="ml-auto mr-auto mt-4 animate-(--floating-animation) hover:[animation-play-state:paused]"
        />
      </MainContainer>
    </header>
  );
}

export default Header;
