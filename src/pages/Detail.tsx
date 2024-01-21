import { BlogType } from "./BlogList";
import BlogItem from "../components/BlogItem";
import {
  useRouteLoaderData,
  LoaderFunctionArgs,
  ActionFunctionArgs,
} from "react-router-dom";

const Detail = () => {
  const blogDetail: BlogType = useRouteLoaderData("blog-detail") as BlogType;
  console.log(blogDetail);
  // return <div></div>;
  return <BlogItem blog={blogDetail} />;
};
export default Detail;
export function blogLoader({ params }: LoaderFunctionArgs): BlogType {
  const id: string | undefined = params.blogid;

  //TODO: handle forced unwrapped
  const blogDetail: BlogType = JSON.parse(localStorage.getItem(id!)!);
  return blogDetail!;
}
export function blogAction({ params, request }: ActionFunctionArgs) {
  const id: string | undefined = params.blogId;
  const mt: string = request.method;
  if (mt === "DELETE") {
    //TODO: handle forced unwrapped
    localStorage.removeItem(id!);
  }
}
