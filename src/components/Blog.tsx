import {
  Box,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
} from "@mui/material";
import { BlogType } from "../pages/BlogList";
import { useNavigate } from "react-router-dom";
interface BlogPropType {
  blog: BlogType;
}
const createExcerpt = (content: string, maxLength: number): string => {
  if (content.length <= maxLength) {
    return content;
  }
  return content.slice(0, maxLength) + "...";
};
const Blog: React.FC<BlogPropType> = ({ blog }) => {
  const excerpt = createExcerpt(blog.content, 185);
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate(`/detail/${blog.id}`);
  };
  return (
    <>
      <Box>
        <Card
          sx={{
            maxHeight: 350,
            width: { xs: 200, md: 400 },
            bgcolor: "#eeee",
            my: 1,
          }}
        >
          {blog.imgUrl !== null && (
            <CardMedia
              component="img"
              width="100"
              height="100"
              src={blog.imgUrl}
              alt={blog.title}
            />
          )}
          <CardContent>
            <Typography variant="h5">{blog.title}</Typography>
            <Typography variant="body1">{excerpt}</Typography>
          </CardContent>
          <CardActions sx={{ justifyContent: "flex-end" }}>
            <Button
              size="small"
              onClick={clickHandler}
              sx={{ textTransform: "none" }}
            >
              Read more
            </Button>
          </CardActions>
        </Card>
      </Box>
    </>
  );
};
export default Blog;
