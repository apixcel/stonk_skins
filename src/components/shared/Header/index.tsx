import HeaderBottom from "./HeaderBottom";
import HeaderTop from "./HeaderTop";

const Header = () => {
  return (
    <header className="w-full backdrop-blur-[5px] fixed top-0 left-0 z-[45]">
      <div className="max-w-[1440px] mx-auto">
        <HeaderTop />
        <HeaderBottom />
      </div>
    </header>
  );
};

export default Header;
