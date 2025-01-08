import HeaderBottom from "./HeaderBottom";
import HeaderTop from "./HeaderTop";

const Header = () => {
  return (
    <header className="w-full backdrop-blur-[5px] fixed top-0 left-0 z-[45]">
      <HeaderTop />
      <HeaderBottom />
    </header>
  );
};

export default Header;
