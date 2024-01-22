import { Stack, Typography } from "@mui/material";
const Error = () => {
  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      sx={{
        width: { xs: 200, md: 500 },
        m: "auto",
        my: 6,
        border: "1px solid #eeee",
      }}
    >
      <Typography variant="h5">Not Found</Typography>
      <Typography variant="body1">Couldn't find page!</Typography>
    </Stack>
  );
};
export default Error;
