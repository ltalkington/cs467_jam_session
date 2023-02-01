import ResponsiveDrawer from "../../Components/Application/Sidebar/Sidebar.js";
import Box from "@mui/material/Box";
import JamSessions from "../../Components/Application/Jam Session/JamSessions.js";
import Grid from "@mui/material/Grid";

function JamSession() {
  let drawerWidth = 240;

  return (
    <header className="App-header3">
      <div>
        <ResponsiveDrawer></ResponsiveDrawer>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
          }}
        >
          {" "}
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
            <JamSessions></JamSessions>
            <JamSessions></JamSessions>
            <JamSessions></JamSessions>
            <JamSessions></JamSessions>
          </Grid>
        </Box>
      </div>
    </header>
  );
}

export default JamSession;
