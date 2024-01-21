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
  const excerpt = createExcerpt(blog.content, 150);
  return (
    <>
      <Box m="auto">
        <Card
          sx={{
            height: 300,
            width: { xs: 200, md: 400 },
            bgcolor: "#eeee",
            my: 1,
            mx: "auto",
            alignItems: "center",
          }}
        >
          <CardMedia
            component="img"
            width="100"
            height="100"
            src={
              blog.imgUrl
                ? blog.imgUrl
                : "https://www.shoutmeloud.com/wp-content/uploads/2020/05/blog.jpg"
            }
          ></CardMedia>
          <CardContent>
            <Typography variant="h5">{blog.title}</Typography>
            <Typography variant="body1">{excerpt}</Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Read more</Button>
          </CardActions>
        </Card>
      </Box>
    </>
  );
};
export default Blog;
