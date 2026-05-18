// Components
import MainContainer from "./MainContainer";

function Footer() {
  return (
    <footer className="bg-black pt-4 pb-4 text-white text-center font-bold">
      <MainContainer>
        <p>
          Copy Rights &copy; {new Date().getFullYear()} | All Rights Reserved
        </p>
      </MainContainer>
    </footer>
  );
}

export default Footer;
