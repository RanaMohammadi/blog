import { Form } from "react-router-dom";
import { Button, Stack } from "@mui/material";
const BlogForm = () => {
  return (
    <Form>
      <p>
        <label htmlFor="title">Title</label>
        <input id="title" type="text" name="title" required defaultValue={""} />
      </p>
      <p>
        <label htmlFor="image">Image</label>
        <input id="image" type="url" name="image" required defaultValue={""} />
      </p>

      <p>
        <label htmlFor="content">Description</label>
        <textarea
          id="content"
          name="content"
          //rows="5"
          required
          defaultValue={""}
        />
      </p>
      <Stack direction="row">
        <Button size="small">Save</Button>
        <Button size="small">Cancel</Button>
      </Stack>
    </Form>
  );
};
export default BlogForm;
