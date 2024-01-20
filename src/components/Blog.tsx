import {
  Box,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
} from "@mui/material";
const Blog = () => {
  return (
    <>
      <Box m="auto">
        <Card
          sx={{
            height: 300,
            width: { xs: 200, md: 400 },
            bgcolor: "#eeee",
            my: 6,
            mx: "auto",
            alignItems: "center",
          }}
        >
          <CardMedia
            component="img"
            width="100"
            height="100"
            src="https://picsum.photos/seed/21/300/200"
          ></CardMedia>
          <CardContent>
            <Typography variant="h4">
              Hospital skill play finish pay!
            </Typography>
            <Typography variant="body1">
              Realize administration plan level cut say dinner...
            </Typography>
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
