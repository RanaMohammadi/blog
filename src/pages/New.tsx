import { Box, Paper, Typography } from "@mui/material";
import BlogForm from "../components/BlogForm";
import { BlogType } from "./BlogList";
const New = () => {
  const createEmptyBlogPost = (): BlogType => ({
    id: 0,
    title: "",
    content: "",
    createdAt: "",
    imgUrl: null,
  });
  const emptyBlogPost = createEmptyBlogPost();
  return (
    <Paper>
      <Typography variant="h4" sx={{ m: 5 }}>
        New blog post
      </Typography>
      <BlogForm blog={emptyBlogPost} />
    </Paper>
  );
};
export default New;
