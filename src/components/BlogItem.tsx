import {
  Box,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
  Stack,
} from "@mui/material";
import { BlogType } from "../pages/BlogList";
import { useLoaderData } from "react-router-dom";
const BlogItem = (blog: BlogType) => {
  return (
    <Box>
      <Card sx={{ width: 500, mx: "auto", my: 6 }}>
        <CardMedia component="img" src={blog.imgUrl ? blog.imgUrl : ""} />
        <CardContent>
          <Stack direction="row">
            <Typography variant="h4">{blog.title}</Typography>
            <Typography variant="body1">{blog.createdAt}</Typography>
          </Stack>
          <Typography variant="body2" sx={{ whiteSpace: "pre-line" }}>
            {blog.content}
          </Typography>
        </CardContent>
        <CardActions>
          <Stack direction="row">
            <Button size="medium">Edit</Button>
            <Button size="medium">Delete</Button>
          </Stack>
        </CardActions>
      </Card>
    </Box>
  );
};
export default BlogItem;
