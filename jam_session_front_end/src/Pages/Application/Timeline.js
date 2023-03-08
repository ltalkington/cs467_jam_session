import React, { useState, useEffect } from "react";
import ResponsiveDrawer from "../../Components/Application/Sidebar/Sidebar.js";
import VideoPost from "../../Components/Application/Timeline/VideoPost.js";
import Tabber from "../../Components/Application/Timeline/Tabber.js";
import TextPost from "../../Components/Application/Timeline/TextPost.js";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import AddIcon from "@mui/icons-material/Add";
import VideocamIcon from "@mui/icons-material/Videocam";
import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";
import FolderIcon from "@mui/icons-material/Folder";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";

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

function Timeline() {
  const navigate = useNavigate();

  let drawerWidth = 240;
  const [tabber, setTabber] = useState(0);
  const [textPosts, setTextPosts] = useState();
  const [videoPosts, setVideoPosts] = useState();

  const loadTextPosts = async () => {
    const response = await fetch("http://localhost:8000/textpost");
    const posts = await response.json();
    console.log(posts);
    setTextPosts(posts);
  };
  useEffect(() => {
    loadTextPosts();
  }, []);

  const loadVideoPosts = async () => {
    const response = await fetch("http://localhost:8000/videopost");
    const posts = await response.json();
    console.log(posts);
    setVideoPosts(posts);
  };
  useEffect(() => {
    loadVideoPosts();
  }, []);

  const actions = [
    {
      icon: <VideocamIcon onClick={() => navigate("/createvideopost")} />,
      name: "Create Jam Session Video Post",
    },
    {
      icon: <DynamicFeedIcon onClick={() => navigate("/createtextpost")} />,
      name: "Create Jam Session Text Post",
    },
    {
      icon: <FolderIcon onClick={() => navigate("/posts")} />,
      name: "Your Posts",
    },
  ];
  useEffect(() => {
    Component(tabber);
    return () => {};
  }, []);
  const Component = (tabber) => {
    let x = tabber;
    if (tabber.tabber === 1) {
      return (
        <div>
          {textPosts?.map((posts, i) => (
            <TextPost key={i} postInfo={posts}></TextPost>
          ))}
        </div>
      );
    } else {
      return (
        <div>
          {videoPosts?.map((posts, i) => (
            <VideoPost key={i} postInfo={posts}></VideoPost>
          ))}
        </div>
      );
    }
  };

  return (
    <header className="App-header3">
      <ResponsiveDrawer></ResponsiveDrawer>
      <Box
        component="main"
        sx={{
          flexGrow: 4,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          paddingRight: 25,
        }}
      >
        {" "}
        <Tabber tabber={tabber} setTabber={setTabber}></Tabber>
      </Box>
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
          <Component tabber={tabber}></Component>
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

export default Timeline;
