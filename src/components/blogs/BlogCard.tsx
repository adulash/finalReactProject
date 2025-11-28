import type { BlogData } from "../../data/types";
import BlogInfo from "./BlogInfo";
import { useNavigate } from "react-router-dom";

export default function BlogCard(blogData: BlogData) {
  const { image, alt, category, title, avartar, avartarAlt, author, date } = blogData;
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/blog/${title}`)}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          navigate(`/blog/${title}`);
        }
      }}
      role="button"
      tabIndex={0}
      className="flex flex-col items-center justify-center bg-white rounded-lg shadow-md p-[16px] gap-[16px]"
      style={{ width: "392px", height: "488px" }}>
      <img className="w-360px h-240px rounded-lg" src={image} alt={alt} />
      <div className="self-start flex flex-row justify-start px-[12px] py-[4px] gap-[4px]  bg-[rgba(75,107,251,0.05)] rounded-[50px]">
        <p className="text-sm text-blue-500">{category}</p>
      </div>
      <h2 className="self-start  text-lg font-bold text-black text-left font-bold">{title}</h2>
      <BlogInfo avartar={avartar} avartarAlt={avartarAlt} author={author} date={date} />
    </div>
  );
}
