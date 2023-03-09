import ResponsiveDrawer from "../../Components/Application/Sidebar/Sidebar.js";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Message from "../../Components/Application/Messages/Message";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import React, { useState, useEffect } from "react";

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
function Messages() {
  let drawerWidth = 240;
  const navigate = useNavigate();
  const [messages, setMessages] = useState();

  const actions = [
    {
      icon: <AddIcon onClick={() => navigate("/createmessage")} />,
      name: "Create Message",
    },
  ];
  const loadMessages = async () => {
    console.log(messages);
    var user_id = 1;
    const response = await fetch(
      process.env.REACT_APP_API_SERVER_URL + "/user/" + user_id + "/messages/received"
    );
    const message = await response.json();
    setMessages(message);
  };
  useEffect(() => {
    loadMessages();
  }, []);
  return (
    <div>
      <ResponsiveDrawer></ResponsiveDrawer>
      <header className="App-header3">
        <Box
          component="main"
          sx={{
            flexGrow: 0,
            p: 0,
            alignItems: "center",
            alignContent: "center",
          }}
        >
          {" "}
          <Grid
            container
            spacing={2}
            sx={{
              flexGrow: 0,
              p: 3,
              spacing: 2,
              alignItems: "center",
              alignContent: "center",
            }}
          >
            <AvatarGroup total={24}>
              <Avatar
                alt="Remy Sharp"
                src="/static/images/avatar/1.jpg"
                sx={{ height: "70px", width: "70px" }}
              />
              <Avatar
                alt="Travis Howard"
                src="/static/images/avatar/2.jpg"
                sx={{ height: "70px", width: "70px" }}
              />
              <Avatar
                alt="Agnes Walker"
                src="/static/images/avatar/4.jpg"
                sx={{ height: "70px", width: "70px" }}
              />
              <Avatar
                alt="Trevor Henderson"
                src="/static/images/avatar/5.jpg"
                sx={{ height: "70px", width: "70px" }}
              />
            </AvatarGroup>
          </Grid>
        </Box>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
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
            <h1 id="center-header"> Messages</h1>
          </Grid>
        </Box>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
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
            {messages?.map((posts, i) => (
              <Message key={i} postInfo={posts}></Message>
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
    </div>
  );
}

export default Messages;
