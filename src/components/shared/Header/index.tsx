import HeaderBottom from "./HeaderBottom";
import HeaderSm from "./HeaderSm";
import HeaderTop from "./HeaderTop";

const Header = () => {
  return (
    <header className="w-full sm:backdrop-blur-[5px] sm:fixed top-0 left-0 z-[45]">
      <div className="hidden sm:block">
        <HeaderTop />
        <HeaderBottom />
      </div>
      <div className="block sm:hidden">
        <HeaderSm />
      </div>
    </header>
  );
};

export default Header;
