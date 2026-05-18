function MainContainer({ children }) {
  return (
    <div className="main-container md:w-[750px] lg:w-[980px] xl:w-[1200px]">
      {children}
    </div>
  );
}

export default MainContainer;
