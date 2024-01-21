import seedData from "../blog-app-seed.json";
import { Link } from "react-router-dom";
import Blog from "../components/Blog";
import { useLoaderData } from "react-router-dom";
export interface BlogType {
  id: number;
  title: string;
  content: string;
  createdAt: string;
  imgUrl: string | null;
}

const BlogList = () => {
  const blogs = useLoaderData() as BlogType[];

  return (
    <div>
      {blogs.map((blog) => (
        <Link
          key={blog.id}
          to={`/detail/${blog.id}`}
          style={{ marginRight: 5 }}
        >
          {blog.title}
        </Link>
      ))}
      <Blog />
    </div>
  );
};
export default BlogList;
//TODO: separate functions
export function loadBlogs(): BlogType[] {
  localStorage.setItem("seedData", JSON.stringify(seedData));

  const storedData: string | null = localStorage.getItem("seedData");
  if (storedData === null) {
    return [];
  } else {
    const blogs: BlogType[] = JSON.parse(storedData);
    return blogs;
  }
}
