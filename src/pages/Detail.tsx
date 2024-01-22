import { BlogType } from "./BlogList";
import BlogItem from "../components/BlogItem";
import {
  useRouteLoaderData,
  LoaderFunctionArgs,
  ActionFunctionArgs,
  redirect,
} from "react-router-dom";

const Detail = () => {
  const blogDetail: BlogType = useRouteLoaderData("blog-detail") as BlogType;

  return <BlogItem blog={blogDetail} />;
};
export default Detail;
export function blogLoader({ params }: LoaderFunctionArgs): BlogType | null {
  const id: string | undefined = params.blogid;

  const blogDetailJSON = localStorage.getItem(id!);
  const blogDetail: BlogType | null = blogDetailJSON
    ? JSON.parse(blogDetailJSON)
    : null;

  if (blogDetail) {
    return blogDetail;
  } else {
    return null;
  }
}
export function blogAction({ params, request }: ActionFunctionArgs) {
  const id: string | undefined = params.blogid;

  const mt: string = request.method;
  if (mt === "DELETE") {
    //TODO: handle forced unwrapped
    localStorage.removeItem(id!);
  }
  return redirect("/");
}
