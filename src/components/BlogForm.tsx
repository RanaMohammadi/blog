import { Form, Navigate, useNavigate } from "react-router-dom";
import {
  Button,
  Stack,
  TextField,
  TextareaAutosize,
  Typography,
} from "@mui/material";
import { BlogType } from "../pages/BlogList";

interface BlogPropType {
  blog: BlogType;
}

const BlogForm: React.FC<BlogPropType> = ({ blog }) => {
  const navigate = useNavigate();
  const cancelHandler = () => {
    navigate("..");
  };
  return (
    <Form>
      <Stack spacing={1} sx={{ width: { xs: 200, md: 500 }, m: "auto", my: 6 }}>
        <TextField label="Title" required type="text" size="medium" />
        <TextField label="ImageUrl" />
        <TextareaAutosize
          placeholder=" Context"
          required
          minRows={15}
          name="Context"
        />
        <Stack direction="row" spacing={2} justifyContent={"flex-end"}>
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
          <Button
            type="submit"
            variant="outlined"
            color="primary"
            onClick={cancelHandler}
          >
            Cancel
          </Button>
        </Stack>
      </Stack>
      <br />
      <br />
      <p>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          name="title"
          required
          defaultValue={blog.title ? blog.title : ""}
        />
      </p>
      <p>
        <label htmlFor="image">Image</label>
        <input
          id="image"
          type="url"
          name="image"
          required
          defaultValue={blog.imgUrl ? blog.imgUrl : ""}
        />
      </p>

      <p>
        <label htmlFor="content">Description</label>
        <textarea
          id="content"
          name="content"
          //rows="5"
          required
          defaultValue={blog.content ? blog.content : ""}
        />
      </p>
      <Stack direction="row">
        <Button size="small">Save</Button>
        <Button size="small" onClick={cancelHandler}>
          Cancel
        </Button>
      </Stack>
    </Form>
  );
};
export default BlogForm;
