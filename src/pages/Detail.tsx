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

  // //TODO: handle forced unwrapped
  // const blogDetail: BlogType = JSON.parse(localStorage.getItem(id!)!);
  // return blogDetail!;

  const blogDetailJSON = localStorage.getItem(id!);
  const blogDetail: BlogType | null = blogDetailJSON
    ? JSON.parse(blogDetailJSON)
    : null;

  if (blogDetail) {
    // Your logic when blogDetail is not null
    return blogDetail;
  } else {
    // Your logic when blogDetail is null
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
