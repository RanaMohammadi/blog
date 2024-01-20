import { Outlet } from "react-router-dom";
import { Box, AppBar, Toolbar, Typography } from "@mui/material";
const Root = () => {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h3">Blog</Typography>
        </Toolbar>
      </AppBar>

      <Outlet />
    </Box>
  );
};
export default Root;
