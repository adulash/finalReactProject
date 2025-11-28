import type { BlogData } from "./types";
import blogData from "./blogData.json";

export function getBlogByTitle(title: string): BlogData | undefined {
  return (blogData as BlogData[]).find((blog: BlogData) => blog.title === title);
}

const blogsData: BlogData[] = blogData as BlogData[];
export default blogsData;
