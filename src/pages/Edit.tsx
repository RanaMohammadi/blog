import { Paper, Typography } from "@mui/material";
import BlogForm from "../components/BlogForm";
import { useRouteLoaderData } from "react-router-dom";
import { BlogType } from "./BlogList";
const Edit = () => {
  const blogDetail: BlogType = useRouteLoaderData("blog-detail") as BlogType;

  return (
    <Paper sx={{ py: 5, maxWidth: 800, width: "100%", m: "auto", my: 3 }}>
      <Typography variant="h4" sx={{ my: 3, mx: 10 }}>
        Edit blog post
      </Typography>
      <BlogForm blog={blogDetail} method="patch" />
    </Paper>
  );
};
export default Edit;
