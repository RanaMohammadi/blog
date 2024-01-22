import seedData from "../blog-app-seed.json";
import { Link } from "react-router-dom";
import Blog from "../components/Blog";
import { useCallback, useEffect, useState } from "react";
import { Button, Stack } from "@mui/material";
export interface BlogType {
  id: number;
  title: string;
  content: string;
  createdAt: string;
  imgUrl: string | null;
}

const PAGE_SIZE = 10;
const fetcher = (pageIndex: number) => {
  let items: BlogType[] = [];

  // Fetch data from localStorage based on pageIndex and PAGE_SIZE
  const start = pageIndex * PAGE_SIZE;
  const end = start + PAGE_SIZE;

  for (let i = start; i < end; i++) {
    const keyId = localStorage.key(i);

    if (keyId) {
      const item = JSON.parse(localStorage.getItem(keyId)!);
      items.push(item);
    }
  }

  return items;
};

const BlogList = () => {
  const [currentPage, setCurrentPage] = useState(0);

  let blogs: BlogType[] = [];

  // const blogs = fetcher(currentPage);
  const uploadData = useCallback(async () => {
    seedData.map((data) => {
      localStorage.setItem(data.id.toString(), JSON.stringify(data));
    });
  }, []);
  useEffect(() => {
    uploadData();
  }, [uploadData]);

  function loadCurrentPage() {
    blogs = fetcher(currentPage);
  }

  function loadNextPage() {
    const currentLoadedItems = (currentPage + 1) * PAGE_SIZE;
    if (currentLoadedItems >= localStorage.length) {
      return;
    }

    setCurrentPage((prev) => prev + 1);
  }

  function loadPreviousPage() {
    if (currentPage === 0) {
      return;
    }

    setCurrentPage((prev) => prev - 1);
  }

  loadCurrentPage();

  return (
    <div
      style={{
        width: "100%",
        maxWidth: 400,
        margin: "auto",

        justifyItems: "center",
      }}
    >
      {blogs.map((blog) => (
        <Link key={blog.id} to={`/detail/${blog.id}`}>
          <Blog blog={blog} />
        </Link>
      ))}
      <Stack
        direction="row"
        spacing={2}
        sx={{ m: "auto", my: 5 }}
        justifyContent="center"
        alignItems="center"
      >
        <Button
          variant="outlined"
          onClick={loadPreviousPage}
          sx={{ backgroundColor: "white" }}
        >
          Prev
        </Button>
        <Button
          variant="outlined"
          onClick={loadNextPage}
          sx={{ backgroundColor: "white" }}
        >
          Next
        </Button>
      </Stack>
    </div>
  );
};
export default BlogList;
//TODO: separate functions
export function loadBlogs(): BlogType[] {
  let items: BlogType[] = [];

  //TODO: handle forced unwrapped
  for (let i = 0; i < localStorage.length; i++) {
    const keyId = localStorage.key(i);
    const item = JSON.parse(localStorage.getItem(keyId!)!);
    items.push(item);
  }

  return items;
}
