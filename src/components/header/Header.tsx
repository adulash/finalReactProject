import { Link } from "react-router-dom";
import Logo from "./Logo";
import SearchBox from "./SearchBox";

export default function Header() {
  return (
    <header className=" flex items-center justify-around w-full border-b bg-white px-4 py-3">
      <Logo />

      <Link to="/" className="text-sm text-gray-500 pl-[100px] w-[100px] text-center ">
        Home
      </Link>
      <SearchBox />
    </header>
  );
}
