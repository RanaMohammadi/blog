import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Root from "./pages/Root";
import BlogList, { loadBlogs } from "./pages/BlogList";
import Detail, { blogLoader } from "./pages/Detail";
import New from "./pages/New";
import Edit from "./pages/Edit";
import Error from "./pages/Error";
import { BlogType } from "./pages/BlogList";

const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />} errorElement={<Error />}>
      <Route index element={<BlogList />} loader={loadBlogs} />
      <Route path="detail/:blogid" loader={blogLoader} id="blog-detail">
        <Route index element={<Detail />} />
        <Route path="edit" element={<Edit />} />
      </Route>
      <Route path="/new" element={<New />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={Router}></RouterProvider>;
}

export default App;
