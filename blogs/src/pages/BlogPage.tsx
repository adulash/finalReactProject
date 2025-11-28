import BlogInfo from "../components/blogs/BlogInfo";
import { useParams } from "react-router-dom";
import { getBlogByTitle } from "../data/blogs";
import ReactMarkdown from "react-markdown";
import { useEffect } from "react";

export default function BlogPage() {
  const { title } = useParams();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [title]);

  if (!title) {
    return <div className="w-[800px] h-full">No blog title provided.</div>;
  }

  const blogData = getBlogByTitle(title);
  if (!blogData) {
    return <div className="w-[800px] h-full">Blog not found.</div>;
  }
  const { avartar, category, avartarAlt, author, date, image, alt, content } = blogData;
  return (
    <div className="flex flex-col items-center justify-center w-[800px] h-full min-h-screen mx-auto">
      <div className="self-start flex flex-row justify-start px-[12px] py-[4px] gap-[4px] bg-blue-500 rounded-[50px] m-[10px]">
        <p className="text-sm text-white">{category}</p>
      </div>
      <h1 className="self-start text-2xl font-bold  mt-[10px]">{title}</h1>
      <div className="self-start m-[10px]">
        <BlogInfo avartar={avartar} avartarAlt={avartarAlt} author={author} date={date} />
      </div>
      <img src={image} alt={alt} className="w-full h-full rounded-lg object-cover" />

      <div className="mt-4 text-justify">
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </div>
  );
}
