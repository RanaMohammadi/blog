import { Paper, Typography } from "@mui/material";
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
    <Paper sx={{ p: 5, maxWidth: 800, width: "100%", m: "auto", my: 3 }}>
      <Typography variant="h4" sx={{ my: 3, mx: 10 }}>
        New blog post
      </Typography>
      <BlogForm blog={emptyBlogPost} method="post" />
    </Paper>
  );
};
export default New;
