import ResponsiveDrawer from "../../Components/Application/Sidebar/Sidebar.js";
import OwnPosts from "../../Components/Application/YourPosts/OwnPosts.js";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

function Posts() {
  return (
    <header className="App-header3">
      <div>
        <ResponsiveDrawer></ResponsiveDrawer>
      </div>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
        }}
      >
        <Grid
          container
          spacing={2}
          sx={{
            flexGrow: 2,
            p: 3,
            spacing: 2,
            alignItems: "center",
            alignContent: "center",
          }}
        >
          <h1> Your Posts</h1>
        </Grid>
      </Box>
      <OwnPosts></OwnPosts>
      <OwnPosts></OwnPosts>
      <OwnPosts></OwnPosts>
      <OwnPosts></OwnPosts>
      <OwnPosts></OwnPosts>
    </header>
  );
}

export default Posts;
