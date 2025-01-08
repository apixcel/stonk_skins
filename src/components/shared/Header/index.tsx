import HeaderBottom from "./HeaderBottom";
import HeaderTop from "./HeaderTop";

const Header = () => {
  return (
    <header className="w-full backdrop-filter-[blur(5px)]">
      <HeaderTop />
      <HeaderBottom />
    </header>
  );
};

export default Header;
