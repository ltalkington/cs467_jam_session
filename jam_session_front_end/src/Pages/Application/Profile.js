import ResponsiveDrawer from "../../Components/Application/Sidebar/Sidebar.js";
import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import SpeedIcon from "@mui/icons-material/Speed";
import Stack from "@mui/material/Stack";
import StarsIcon from "@mui/icons-material/Stars";
import EditIcon from "@mui/icons-material/Edit";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";
import FolderIcon from "@mui/icons-material/Folder";

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

function Profile() {
  // This will grab user data from the login process and make it available.
  // user.name, user.picture, and user.email are available.
  // Other data may need to be pulled from a database query.
  const { user } = useAuth0();
  const [userProfile, setUserProfile] = useState({});
  const navigate = useNavigate();

  const actions = [
    {
      icon: (
        <EditIcon onClick={() => navigate("/updateprofile", userProfile)} />
      ),
      name: "Update User Profile",
    },
  ];

  useEffect(() => {
    async function getUserProfile() {
      if (user) {
        setUserProfile(await getOrMakeProfile(user));
      }
    }
  }, [user]);

  return (
    <div>
      <ResponsiveDrawer />

      <CssBaseline />
      <header className="App-header3">
        <AppBar position="relative" color={"secondary"}>
          <Avatar
            alt={userProfile.name}
            src={userProfile.user_photo_link}
            sx={{ width: 200, height: 200, mx: "auto" }}
            variant="circular"
          />
          <Typography
            variant="h1"
            align="center"
            color="text.primary"
            paragraph
          >
            {userProfile.name}
          </Typography>
          <Typography variant="p" align="center" color="text.primary" paragraph>
            <span>
              <SpeedIcon />
              {userProfile.experience}
            </span>
            <span>
              <MonetizationOnIcon />
              {`\$${userProfile.hourly_fee}/hr`}
            </span>
            <span>
              <LocationOnIcon />
              {userProfile.location}
            </span>
          </Typography>
        </AppBar>

        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 6,
            pb: 6,
          }}
        >
          <Container maxWidth="md">
            {/* Short introduction by the user */}
            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              paragraph
            >
              Welcome to my page! I mainly focus on classical pieces, but I am
              branching out into folk music lately.
            </Typography>
            {/* Social Media links */}
            <Stack
              direction="row"
              spacing={2}
              justifyContent="center"
              alignItems="center"
            >
              <Avatar>A</Avatar>
              <Avatar>B</Avatar>
              <Avatar>C</Avatar>
            </Stack>
            <Grid container alignItems="center" justifyContent="center">
              <Grid item sx={{ p: 2 }}>
                <Card
                  elevation={12}
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Instruments
                    </Typography>
                    <Typography>
                      {displayListItems(
                        makeStringList(userProfile.instruments, ", ")
                      )}
                      {/*<List>*/}
                      {/*  <ListItem>*/}
                      {/*    <ListItemText primary="Guitar" />*/}
                      {/*  </ListItem>*/}
                      {/*  <ListItem>*/}
                      {/*    <ListItemText primary="Trumpet" />*/}
                      {/*  </ListItem>*/}
                      {/*</List>*/}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item sx={{ p: 2 }}>
                <Card
                  elevation={12}
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Liked Genres
                    </Typography>
                    <Typography>
                      {displayListItems(
                        makeStringList(userProfile.liked_genres, ", ")
                      )}
                      {/*<List>*/}
                      {/*  <ListItem>*/}
                      {/*    <ListItemText primary="Folk" />*/}
                      {/*  </ListItem>*/}
                      {/*  <ListItem>*/}
                      {/*    <ListItemText primary="Classical" />*/}
                      {/*  </ListItem>*/}
                      {/*</List>*/}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item sx={{ p: 2 }}>
                <Card
                  elevation={12}
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Disliked Genres
                    </Typography>
                    <Typography>
                      hello
                      {displayListItems(
                        makeStringList(userProfile.disliked_genres, ", ")
                      )}
                      {/*<List>*/}
                      {/*  <ListItem>*/}
                      {/*    <ListItemText primary="Hip-Hop" />*/}
                      {/*  </ListItem>*/}
                      {/*  <ListItem>*/}
                      {/*    <ListItemText primary="Rock" />*/}
                      {/*  </ListItem>*/}
                      {/*</List>*/}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* Availability */}
          <Grid container spacing={2} justifyContent="center">
            <Grid
              item
              xs={12}
              md={6}
              justifyContent="center"
              alignItems="center"
            >
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h6" component="div">
                    Availability
                  </Typography>
                  {displayListItems(
                    makeStringList(userProfile.availability, ", ")
                  )}
                  {/*<List>*/}
                  {/*  <ListItem>*/}
                  {/*    <ListItemText primary="10/13/23" />*/}
                  {/*  </ListItem>*/}
                  {/*  <ListItem>*/}
                  {/*    <ListItemText primary="10/14/23" />*/}
                  {/*  </ListItem>*/}
                  {/*  <ListItem>*/}
                  {/*    <ListItemText primary="10/17/23" />*/}
                  {/*  </ListItem>*/}
                  {/*  <ListItem>*/}
                  {/*    <ListItemText primary="10/18/23" />*/}
                  {/*  </ListItem>*/}
                  {/*  <ListItem>*/}
                  {/*    <ListItemText primary="10/30/23" />*/}
                  {/*  </ListItem>*/}
                  {/*</List>*/}
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h6" component="div">
                    Ratings
                  </Typography>
                  <Typography variant="p" component="div">
                    <StarsIcon /> Overall: 4.6
                  </Typography>
                  <List>
                    <ListItem>
                      <ListItemText primary="4" secondary="6/13/23" />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary="3" secondary="4/3/22" />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary="5" secondary="9/5/21" />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary="5" secondary="1/19/20" />
                    </ListItem>
                  </List>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
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

async function getOrMakeProfile(user) {
  let profile;
  try {
    let response = await fetch(
      `${process.env.REACT_APP_API_SERVER_URL}/user_profiles/${user.sub}`,
      {
        method: "GET",
      }
    );
    profile = JSON.decode(response.body);
  } catch (error) {
    let profile_inserts = {
      user_id: user.sub,
      display_name: user.name,
      user_photo_link: user.picture,
      location: "",
      instruments: "",
      experience: "",
      liked_genres: "",
      disliked_genres: "",
      portfolio_link: "",
      hourly_fee: 0,
      availability: "",
      review_id: "",
    };
    let response = await fetch(
      `${process.env.REACT_APP_API_SERVER_URL}/user_profiles`,
      {
        method: "POST",
        body: JSON.stringify(profile_inserts),
      }
    );
    profile = JSON.decode(response.body);
  }
  return profile;
}

// Use to split strings of instruments, experience, genres, etc.
function makeStringList(string, delimiter) {
  return string.split(delimiter);
}

function displayListItems(list) {
  if (list.isEmpty) {
    return null;
  }
  let things;
  if (typeof list[0] === "string") {
    things = list.map((thing) => (
      <ListItem>
        {" "}
        <ListItemText primary={thing} />{" "}
      </ListItem>
    ));
  } else if (typeof list[0] === "object") {
    things = list.map((thing) => (
      <ListItem>
        {" "}
        <ListItemText
          primary={thing.star_rating}
          secondary={thing.comments}
        />{" "}
      </ListItem>
    ));
  }
  return <List>{things}</List>;
}

export default Profile;
