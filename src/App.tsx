import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Root from "./pages/Root";
import BlogList from "./pages/BlogList";
import Detail from "./pages/Detail";
import New from "./pages/New";
import Edit from "./pages/Edit";
import Error from "./pages/Error";

const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />} errorElement={<Error />}>
      <Route index element={<BlogList />} />
      <Route path="/detail" element={<Detail />} />
      <Route path="/new" element={<New />} />
      <Route path="/edit" element={<Edit />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={Router}></RouterProvider>;
}

export default App;
