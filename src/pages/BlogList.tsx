import seedData from "../blog-app-seed.json";
import { Link } from "react-router-dom";
import Blog from "../components/Blog";
import { useCallback, useEffect, useState } from "react";
import {
  Button,
  Stack,
  Input,
  InputAdornment,
  IconButton,
  TextField,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
export interface BlogType {
  id: number;
  title: string;
  content: string;
  createdAt: string;
  imgUrl: string | null;
}

const pageSize = 10;

const fetcher = (pageIndex: number, searchQuery: string) => {
  let items: BlogType[] = [];

  const start = pageIndex * pageSize;
  const end = start + pageSize;

  for (let i = start; i < end; i++) {
    const keyId = localStorage.key(i);

    if (keyId) {
      const item = JSON.parse(localStorage.getItem(keyId)!);

      if (
        !searchQuery ||
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
      ) {
        items.push(item);
      }
    }
  }

  return items;
};

const BlogList = () => {
  const [currentPage, setCurrentPage] = useState(0);

  let blogs: BlogType[] = [];

  const uploadData = useCallback(async () => {
    seedData.map((data) => {
      localStorage.setItem(data.id.toString(), JSON.stringify(data));
    });
  }, []);
  useEffect(() => {
    uploadData();
  }, [uploadData]);
  const [searchQuery, setSearchQuery] = useState("");

  function loadCurrentPage() {
    blogs = fetcher(currentPage, searchQuery);
  }

  function loadNextPage() {
    const currentLoadedItems = (currentPage + 1) * pageSize;
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
  function handleSearchChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchQuery(event.target.value);
    setCurrentPage(0);
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
      <TextField
        sx={{ my: 2, width: 400 }}
        placeholder="Search by title"
        value={searchQuery}
        onChange={handleSearchChange}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
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
