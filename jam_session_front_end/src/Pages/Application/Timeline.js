import React, { useState, useEffect } from "react";
import ResponsiveDrawer from "../../Components/Application/Sidebar/Sidebar.js";
import VideoPost from "../../Components/Application/Timeline/VideoPost.js";
import Tabber from "../../Components/Application/Timeline/Tabber.js";
import TextPost from "../../Components/Application/Timeline/TextPost.js";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

function Timeline() {
  let drawerWidth = 240;
  const [tabber, setTabber] = useState(0);
  useEffect(() => {
    Component(tabber);
    return () => {};
  }, []);
  const Component = (tabber) => {
    let x = tabber;
    if (tabber.tabber === 1) {
      return <TextPosts></TextPosts>;
    } else {
      return <VideoPosts></VideoPosts>;
    }
  };
  function VideoPosts() {
    return (
      <>
        <VideoPost></VideoPost>
        <VideoPost></VideoPost>
        <VideoPost></VideoPost>
        <VideoPost></VideoPost>
      </>
    );
  }
  function TextPosts() {
    return (
      <>
        <TextPost></TextPost>
        <TextPost></TextPost>
        <TextPost></TextPost>
        <TextPost></TextPost>
      </>
    );
  }
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
    </header>
  );
}

export default Timeline;
