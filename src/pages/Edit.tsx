import { Paper, Typography } from "@mui/material";
import BlogForm from "../components/BlogForm";
import { useRouteLoaderData } from "react-router-dom";
import { BlogType } from "./BlogList";
const Edit = () => {
  const blogDetail: BlogType = useRouteLoaderData("blog-detail") as BlogType;

  return (
    <Paper>
      <Typography variant="h4" sx={{ m: 5 }}>
        Edit blog post
      </Typography>
      <BlogForm blog={blogDetail} />
    </Paper>
  );
};
export default Edit;
