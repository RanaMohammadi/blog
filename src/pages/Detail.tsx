import { BlogType } from "./BlogList";
import BlogItem from "../components/BlogItem";
import { useLoaderData, LoaderFunctionArgs } from "react-router-dom";
const Detail = () => {
  return <div></div>; //
  //s <BlogItem blog={} />;
};
export default Detail;
export function blogLoader({ params }: LoaderFunctionArgs): string {
  const id: string | undefined = params.blogid;
  console.log(id);
  return id ?? "";
  //const blog: BlogType = localStorage.getItem("")
}
