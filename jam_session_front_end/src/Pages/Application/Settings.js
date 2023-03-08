import ResponsiveDrawer from "../../Components/Application/Sidebar/Sidebar.js";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Switch from "@mui/material/Switch";

import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "start",
  color: theme.palette.text.secondary,
}));

function Settings() {
  return (
    <div>
      <ResponsiveDrawer></ResponsiveDrawer>
      <header className="App-header3">
        <Typography variant="h1" align="center" color="text.white" paragraph>
          Settings
        </Typography>
        <Typography variant="p" align="center" color="text.white" paragraph>
          Use the switches below to turn your user settings on and off.
        </Typography>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Box sx={{ width: "40%" }}>
            <Stack spacing={1} sx={{ justifyContent: "space-between" }}>
              <Item>
                Do you want to have alerts? <Switch />
              </Item>
              <Item>
                Sign up for emails? <Switch />
              </Item>
            </Stack>
          </Box>
        </Grid>
      </header>
    </div>
  );
}

export default Settings;
