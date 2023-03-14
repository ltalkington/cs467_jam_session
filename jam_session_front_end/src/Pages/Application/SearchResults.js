import ResponsiveDrawer from "../../Components/Application/Sidebar/Sidebar.js";
import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Stack from "@mui/material/Stack";
import JamSessions from "../../Components/Application/Jam Session/JamSessions.js";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function SearchResults() {
  let drawerWidth = 240;
  return (
    <div className="App-header3">
      <ResponsiveDrawer></ResponsiveDrawer>

      <Typography variant="h1" align="center" color="text.white" paragraph>
        Search Results
      </Typography>

      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <Paper
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: 600,
          }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search For Jam Sessions"
            inputProps={{ "aria-label": "search jam sessions" }}
          />
          <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
            <SearchIcon />
          </IconButton>
        </Paper>
      </Stack>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
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
          <JamSessions></JamSessions>
          <JamSessions></JamSessions>
          <JamSessions></JamSessions>
          <JamSessions></JamSessions>
          <JamSessions></JamSessions>
          <JamSessions></JamSessions>
          <JamSessions></JamSessions>
          <JamSessions></JamSessions>
          <JamSessions></JamSessions>
        </Grid>
      </Box>
    </div>
  );
}

export default SearchResults;
