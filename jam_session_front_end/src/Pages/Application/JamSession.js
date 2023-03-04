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
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

const StyledSpeedDial = styled(SpeedDial)(({ theme }) => ({
  position: "absolute",
  "&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft": {
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  "&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight": {
    top: theme.spacing(2),
    left: theme.spacing(2),
  },
}));

function JamSession() {
  let drawerWidth = 240;
  const [jamSessions, setJamSessions] = useState();
  const navigate = useNavigate();

  const actions = [
    {
      icon: <AddIcon onClick={() => navigate("/createjamsession")} />,
      name: "Create Jam Session Request",
    },
    {
      icon: <FolderIcon onClick={() => navigate("/yourjamsessions")} />,
      name: "Your Jam Sessions",
    },
  ];

  const loadJamSessions = async () => {
    const response = await fetch("http://localhost:8000/jamsession");
    const jams = await response.json();
    setJamSessions(jams);
  };
  useEffect(() => {
    loadJamSessions();
  }, []);

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
          {jamSessions?.map((jam, i) => (
            <JamSessions key={i} jamSessions={jam}></JamSessions>
          ))}
        </Grid>
      </Box>
      <Box sx={{ height: 30, mt: 3, flexGrow: 3 }}>
        <StyledSpeedDial
          ariaLabel="Jam Utilities"
          sx={{ position: "fixed", bottom: 0, right: "100%" }}
          icon={<SpeedDialIcon />}
        >
          {actions.map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
            />
          ))}
        </StyledSpeedDial>
      </Box>
    </header>
  );
}

export default JamSession;
