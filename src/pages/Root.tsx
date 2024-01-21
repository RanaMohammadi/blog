import { Outlet, Link } from "react-router-dom";
import { Box, AppBar, Toolbar, Typography, Stack, Button } from "@mui/material";
const Root = () => {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Link
            to="/"
            style={{
              textDecoration: "none",
              flexGrow: 1,
              color: "white",
              padding: 7,
            }}
          >
            <Typography variant="h3" color="inherit">
              Blog
            </Typography>
          </Link>
          <Link to="/new">
            <Button style={{ color: "white" }}>Add new post</Button>
          </Link>
        </Toolbar>
      </AppBar>

      <Outlet />
    </Box>
  );
};
export default Root;
