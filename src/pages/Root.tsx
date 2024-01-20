import { Outlet } from "react-router-dom";
const Root = () => {
  return (
    <div>
      Root layout
      <Outlet />
    </div>
  );
};
export default Root;
