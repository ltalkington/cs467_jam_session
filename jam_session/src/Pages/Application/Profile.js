import ResponsiveDrawer from "../../Components/Application/Sidebar/Sidebar.js";
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import SpeedIcon from '@mui/icons-material/Speed';
import Stack from '@mui/material/Stack';
import StarsIcon from '@mui/icons-material/Stars';
import Typography from '@mui/material/Typography';
import userProfilePicture from "../../Assets/user_profile_picture.jpg";

function Profile() {
  return (
    <div>
      <ResponsiveDrawer></ResponsiveDrawer>
      <CssBaseline />
      <AppBar position="relative">
        <Avatar
          alt="Example User"
          src={userProfilePicture}
          sx={{ width: 200, height: 200, mx: 'auto' }}
          variant="circular"
        />
        <Typography variant="h1" align="center" color="text.primary" paragraph>
          Example User
        </Typography>
        <Typography variant="p" align="center" color="text.primary" paragraph>
          <span><SpeedIcon />Expert </span>
          <span><MonetizationOnIcon />$50/hour </span>
          <span><LocationOnIcon />Portland, OR </span>
        </Typography>
      </AppBar>
      <main>
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 6,
            pb: 6,
          }}
        >
          <Container maxWidth="md">
            {/* Short introduction by the user */}
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              Welcome to my page! I mainly focus on classical pieces, but I am branching
              out into folk music lately.
            </Typography>
            {/* Social Media links */}
            <Stack direction="row" spacing={2} justifyContent="center"
              alignItems="center">
              <Avatar>A</Avatar>
              <Avatar>B</Avatar>
              <Avatar>C</Avatar>
            </Stack>
            <Grid container alignItems="center" justifyContent="center" >
              <Grid item sx={{ p: 2 }} >
                <Card elevation={12}
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardContent sx={{ flexGrow: 1 }} >
                    <Typography gutterBottom variant="h5" component="h2">
                      Instruments
                    </Typography>
                    <Typography>
                      <List>
                        <ListItem>
                          <ListItemText
                            primary="Guitar"
                          />
                        </ListItem>
                        <ListItem>
                          <ListItemText
                            primary="Trumpet"
                          />
                        </ListItem>
                      </List>
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item sx={{ p: 2 }}>
                <Card elevation={12}
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Liked Genres
                    </Typography>
                    <Typography>
                      <List>
                        <ListItem>
                          <ListItemText
                            primary="Folk"
                          />
                        </ListItem>
                        <ListItem>
                          <ListItemText
                            primary="Classical"
                          />
                        </ListItem>
                      </List>
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item sx={{ p: 2 }}>
                <Card elevation={12}
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Disliked Genres
                    </Typography>
                    <Typography>
                      <List>
                        <ListItem>
                          <ListItemText
                            primary="Hip-Hop"
                          />
                        </ListItem>
                        <ListItem>
                          <ListItemText
                            primary="Rock"
                          />
                        </ListItem>
                      </List>
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
            <Grid item xs={12} md={6} justifyContent="center"
              alignItems="center" >
              <Card
                sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
              >
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h6" component="div">
                    Availability
                  </Typography>
                  <List>
                    <ListItem>
                      <ListItemText
                        primary="10/13/23"
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        primary="10/14/23"
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        primary="10/17/23"
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        primary="10/18/23"
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        primary="10/30/23"
                      />
                    </ListItem>
                  </List>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card
                sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
              >
                <CardContent sx={{ flexGrow: 1 }} >
                  <Typography variant="h6" component="div">
                    Ratings
                  </Typography>
                  <Typography variant="p" component="div">
                    <StarsIcon /> Overall: 4.6
                  </Typography>
                  <List>
                    <ListItem>
                      <ListItemText
                        primary="4"
                        secondary="6/13/23"
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        primary="3"
                        secondary="4/3/22"
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        primary="5"
                        secondary="9/5/21"
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        primary="5"
                        secondary="1/19/20" />
                    </ListItem>
                  </List>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </main>
    </div >
  );
}

export default Profile;
