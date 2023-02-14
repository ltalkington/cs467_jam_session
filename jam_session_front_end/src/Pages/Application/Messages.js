import ResponsiveDrawer from "../../Components/Application/Sidebar/Sidebar.js";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Message from "../../Components/Application/Messages/Message";

function Messages() {
  let drawerWidth = 240;
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
            <Message></Message>
            <Message></Message>
            <Message></Message>
            <Message></Message>
          </Grid>
        </Box>
      </header>
    </div>
  );
}

export default Messages;
