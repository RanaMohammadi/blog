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
  seedData.map((data) => {
    localStorage.setItem(data.id.toString(), JSON.stringify(data));
  });

  let items: BlogType[] = [];

  //TODO: handle forced unwrapped
  for (let i = 0; i < localStorage.length; i++) {
    const keyId = localStorage.key(i);
    const item = JSON.parse(localStorage.getItem(keyId!)!);
    items.push(item);
  }

  return items;
}
