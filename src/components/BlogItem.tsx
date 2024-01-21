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
import { Link, useLoaderData, useSubmit } from "react-router-dom";

interface BlogPropType {
  blog: BlogType;
}
const BlogItem: React.FC<BlogPropType> = ({ blog }) => {
  const submit = useSubmit();
  const deleteHandler = () => {
    submit(null, { method: "DELETE" });
    console.log("delete handler");
  };

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
            <Button size="medium">
              <Link to="edit">Edit</Link>
            </Button>
            <Button size="medium" onClick={deleteHandler}>
              Delete
            </Button>
          </Stack>
        </CardActions>
      </Card>
    </Box>
  );
};
export default BlogItem;
