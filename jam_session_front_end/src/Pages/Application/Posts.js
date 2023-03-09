import ResponsiveDrawer from "../../Components/Application/Sidebar/Sidebar.js";
import OwnTextPosts from "../../Components/Application/YourPosts/OwnTextPosts.js";
import OwnVideoPosts from "../../Components/Application/YourPosts/OwnVideoPosts.js";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Tabber from "../../Components/Application/Timeline/Tabber.js";
import { useAuth0 } from "@auth0/auth0-react";
import React, { useState, useEffect } from "react";

function Posts() {
  const [textPosts, setTextPosts] = useState();
  const [tabber, setTabber] = useState(0);
  const [videoPosts, setVideoPosts] = useState();
  const { user } = useAuth0();

  const loadTextPosts = async () => {
    const auth_id = user.sub.split("|")[1];

    const userresponse = await fetch(process.env.REACT_APP_API_SERVER_URL + "/users/" + auth_id);
    const posts = await userresponse.json();
    var user_id = posts[0].user_id;
    console.log(user_id);
    const response = await fetch(process.env.REACT_APP_API_SERVER_URL + "/textpost/" + user_id);
    const userPosts = await response.json();
    setTextPosts(userPosts);
  };
  useEffect(() => {
    loadTextPosts();
  }, []);

  const loadVideoPosts = async () => {
    const auth_id = user.sub.split("|")[1];

    const userresponse = await fetch(process.env.REACT_APP_API_SERVER_URL + "/users/" + auth_id);
    const posts = await userresponse.json();
    var user_id = posts[0].user_id;
    const response = await fetch(process.env.REACT_APP_API_SERVER_URL + "/videopost/" + user_id);
    const userPosts = await response.json();
    setVideoPosts(userPosts);
  };
  useEffect(() => {
    loadVideoPosts();
  }, []);

  useEffect(() => {
    Component(tabber);
    return () => { };
  }, []);
  const Component = (tabber) => {
    let x = tabber;
    if (tabber.tabber === 1) {
      return (
        <div>
          {textPosts?.map((posts, i) => (
            <OwnTextPosts
              key={i}
              postInfo={posts}
              loadTextPosts={loadTextPosts}
            ></OwnTextPosts>
          ))}
        </div>
      );
    } else {
      return (
        <div>
          {videoPosts?.map((posts, i) => (
            <OwnVideoPosts
              key={i}
              postInfo={posts}
              loadVideoPosts={loadVideoPosts}
            ></OwnVideoPosts>
          ))}
        </div>
      );
    }
  };

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
          <Tabber tabber={tabber} setTabber={setTabber}></Tabber>
        </Grid>
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

export default Posts;
