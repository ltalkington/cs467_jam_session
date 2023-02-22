import ResponsiveDrawer from "../../Components/Application/Sidebar/Sidebar.js";
import Box from "@mui/material/Box";
import JamSessions from "../../Components/Application/Jam Session/JamSessions.js";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import AddIcon from "@mui/icons-material/Add";
import FolderIcon from "@mui/icons-material/Folder";
import ShareIcon from "@mui/icons-material/Share";
import { Link } from "react-router-dom";


function JamSession() {
  let drawerWidth = 240;
  const actions = [
    { icon: <AddIcon component={Link} to="/createjamsession"/>, name: "Create Jam Session Request" },
    { icon: <FolderIcon />, name: "Your Jam Sessions" },
    { icon: <ShareIcon />, name: "Share" },
  ];

  return (
    <header className="App-header3">
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
      <Box sx={{ height: 320, transform: "translateZ(0px)", flexGrow: 3 }}>
        <SpeedDial
          ariaLabel="Jam Utilities"
          sx={{ position: "absolute", bottom: 16, left: 800 }}
          icon={<SpeedDialIcon />}
        >
          {actions.map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
            />
          ))}
        </SpeedDial>
      </Box>
    </header>
  );
}

export default JamSession;
