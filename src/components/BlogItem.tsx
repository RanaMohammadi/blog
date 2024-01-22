import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
  Stack,
} from "@mui/material";
import { BlogType } from "../pages/BlogList";
import { Link, useSubmit } from "react-router-dom";

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
    <Stack>
      <Card sx={{ width: "100%", maxWidth: 600, my: 6, mx: "auto", p: 3 }}>
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
          <Stack
            direction="row"
            spacing={2}
            sx={{ m: "auto", my: 5 }}
            justifyContent="center"
            alignItems="center"
          >
            <Button size="medium" color="primary">
              <Link to="edit" style={{ color: "inherit" }}>
                Edit
              </Link>
            </Button>
            <Button size="medium" onClick={deleteHandler}>
              Delete
            </Button>
          </Stack>
        </CardActions>
      </Card>
    </Stack>
  );
};
export default BlogItem;
