import ResponsiveDrawer from "../../Components/Application/Sidebar/Sidebar.js";
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import userProfilePicture from "../../Assets/user_profile_picture.jpg";

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];


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
        <Typography variant="h5" align="center" color="text.primary" paragraph>
          <LocationOnIcon />Portland, OR
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
          <Container maxWidth="sm">
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

          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    image="https://source.unsplash.com/random"
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe the
                      content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">View</Button>
                    <Button size="small">Edit</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </div >
  );
}

export default Profile;
