import {
  Form,
  Navigate,
  useNavigate,
  ActionFunctionArgs,
  redirect,
  FormMethod,
} from "react-router-dom";
import {
  Button,
  Stack,
  TextField,
  TextareaAutosize,
  Typography,
} from "@mui/material";
import { BlogType } from "../pages/BlogList";
import { title } from "process";
import { randomInt } from "crypto";

interface BlogPropType {
  blog: BlogType;
  method: FormMethod;
}

const BlogForm: React.FC<BlogPropType> = ({ blog, method }) => {
  const navigate = useNavigate();
  const cancelHandler = () => {
    navigate("..");
  };
  return (
    <Form method={method}>
      <Stack spacing={1} sx={{ width: { xs: 200, md: 500 }, m: "auto", my: 6 }}>
        <TextField
          label="Title"
          required
          type="text"
          size="medium"
          name="title"
          value={blog.title ?? ""}
        />
        <TextField label="ImageUrl" name="imageUrl" value={blog.imgUrl ?? ""} />
        <TextareaAutosize
          placeholder=" Content"
          required
          minRows={15}
          name="content"
          value={blog.content ?? ""}
        />
        <Stack direction="row" spacing={2} justifyContent={"flex-end"}>
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
          <Button variant="outlined" color="primary" onClick={cancelHandler}>
            Cancel
          </Button>
        </Stack>
      </Stack>
    </Form>
  );
};
export default BlogForm;
export async function formAction({ params, request }: ActionFunctionArgs) {
  console.log("form action");
  const act: string = request.method;
  const data = await request.formData();
  if (act === "post") {
    console.log(data);

    if (data !== null) {
      let newBlog: BlogType = {
        id: generateNewId(),
        createdAt: "2024",
        title: data.get("title") as string,
        imgUrl: data.get("imgUrl") as string,
        content: data.get("content") as string,
      };
      localStorage.setItem(newBlog.id.toString(), JSON.stringify(newBlog));
    }
  }
  if (act === "patch") {
    let idparam: string | undefined = params.blogid;
    if (idparam !== undefined && data !== null) {
      const id: number = +idparam;

      let editedBlog: BlogType = {
        id: id,
        createdAt: data.get("createdAt") as string,
        title: data.get("title") as string,
        imgUrl: data.get("imgUrl") as string,
        content: data.get("content") as string,
      };
      localStorage.setItem(
        editedBlog.id.toString(),
        JSON.stringify(editedBlog)
      );
    }
  }

  return redirect("/");
}
const generateNewId = (): number => {
  const id: number = Math.floor(Math.random());
  return id;
};
