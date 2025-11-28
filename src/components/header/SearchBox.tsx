import { useState, type FormEvent } from "react";
import searchIcon from "../../assets/search.svg";
import { useSearch } from "../../context/SearchContext";

export default function SearchBox() {
  const { setSearchQuery } = useSearch();
  const [inputValue, setInputValue] = useState("");
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearchQuery(inputValue);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center gap-2 bg-gray-100 rounded-[10px] px-2 py-2 h-[36px] w-[180px]">
      <input
        type="text"
        placeholder="Search"
        onChange={(e) => setInputValue(e.target.value)}
        className="bg-transparent outline-none flex-1 text-sm min-w-0"
      />
      <button
        type="submit"
        className="flex items-center justify-center hover:bg-gray-200 rounded-full p-2 cursor-pointer">
        <img src={searchIcon} alt="Search" className="w-4 h-4" />
      </button>
    </form>
  );
}
