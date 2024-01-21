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

function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
const BlogItem: React.FC<BlogPropType> = ({ blog }) => {
  const submit = useSubmit();
  const deleteHandler = () => {
    const proceed = window.confirm("Are you sure?");
    if (proceed) {
      submit(null, { method: "DELETE" });
    }
  };

  return (
    <Box>
      <Card sx={{ width: 600, mx: "auto", my: 6 }}>
        <CardMedia component="img" src={blog.imgUrl ? blog.imgUrl : ""} />
        <CardContent>
          <Stack direction="row" sx={{ my: 5 }}>
            <Typography variant="h4">{blog.title}</Typography>
            <Typography variant="body2" sx={{ whiteSpace: "nowrap" }}>
              {formatDate(blog.createdAt)}
            </Typography>
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
