import ResponsiveDrawer from "../../Components/Application/Sidebar/Sidebar.js";
import Box from "@mui/material/Box";
import OwnJamSessions from "../../Components/Application/Jam Session/OwnJamSessions.js";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import AddIcon from "@mui/icons-material/Add";
import FolderIcon from "@mui/icons-material/Folder";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

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

function YourJamSessions() {
  const { user } = useAuth0();
  console.log(user);
  const [userSub, setUserSub] = useState();

  const navigate = useNavigate();

  let drawerWidth = 240;
  const [jamSessions, setJamSessions] = useState();

  const loadJamSessions = async () => {
    const auth_id = user.sub.split("|")[1];
    const userresponse = await fetch(process.env.REACT_APP_API_SERVER_URL + "/users/" + auth_id);
    const posts = await userresponse.json();
    var user_id = posts[0].user_id;

    const response = await fetch(
      process.env.REACT_APP_API_SERVER_URL + "/user/" + user_id + "/jamsession/"
    );
    const jams = await response.json();
    setJamSessions(jams);
  };
  useEffect(() => {
    loadJamSessions();
  }, []);
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
  return (
    <header className="App-header3">
      <ResponsiveDrawer></ResponsiveDrawer>
      <Typography variant="h1" align="center" color="text.white" paragraph>
        Your Jam Sessions
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
            <OwnJamSessions
              key={i}
              jamSessions={jam}
              loadJamSessions={loadJamSessions}
            ></OwnJamSessions>
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

export default YourJamSessions;
