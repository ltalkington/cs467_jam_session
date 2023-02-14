import ResponsiveDrawer from "../../Components/Application/Sidebar/Sidebar.js";
import Box from "@mui/material/Box";
import JamSessions from "../../Components/Application/Jam Session/JamSessions.js";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

function JamSession() {
  let drawerWidth = 240;

  return (
    <header className="App-header3">
      <div>
        <ResponsiveDrawer></ResponsiveDrawer>
        <Typography variant="h1" align="center" color="text.white" paragraph>
          Jam Sessions
        </Typography>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
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
