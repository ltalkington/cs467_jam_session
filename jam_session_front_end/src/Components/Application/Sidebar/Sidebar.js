import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";
import ReviewsIcon from "@mui/icons-material/Reviews";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import SettingsIcon from "@mui/icons-material/Settings";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import PianoIcon from "@mui/icons-material/Piano";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import GraphicEqIcon from "@mui/icons-material/GraphicEq";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "../../Authenticate/LogoutButton";

const drawerWidth = 240;

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const { logout } = useAuth0();

  const drawer = (
    <div>
      <Typography
        variant="h5"
        align="center"
        noWrap
        component="div"
        style={{ width: "100%", alignItems: "center" }}
      >
        <span style={{ paddingRight: 10 }}>Jam Session</span>
        <span style={{ paddingLeft: 10 }}>
          <a style={{ color: "black" }} href="/searchresults">
            <SearchIcon />
          </a>
        </span>
        <span style={{ paddingLeft: 10 }}>
          <NotificationsIcon />
        </span>
      </Typography>
      <br></br>
      <Divider />
      <List>
        <ListItem button key="Timeline" component={Link} to="/timeline">
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Timeline" />
        </ListItem>
        <ListItem button key="Profile" component={Link} to="/profile">
          <ListItemIcon>
            <AccountBoxIcon />
          </ListItemIcon>
          <ListItemText primary="Profile" />
        </ListItem>

        <ListItem button key="Review" component={Link} to="/review">
          <ListItemIcon>
            <ReviewsIcon />
          </ListItemIcon>
          <ListItemText primary="Review a Musician " />
        </ListItem>

        <ListItem button key="YourPost" component={Link} to="/posts">
          <ListItemIcon>
            <DynamicFeedIcon />
          </ListItemIcon>
          <ListItemText primary="Your Posts" />
        </ListItem>

        <ListItem button key="Jam Sessions" component={Link} to="/jamsessions">
          <ListItemIcon>
            <GraphicEqIcon />
          </ListItemIcon>
          <ListItemText primary="Jam Sessions" />
        </ListItem>

        <ListItem
          button
          key="Your Jam Sessions"
          component={Link}
          to="/yourjamsessions"
        >
          <ListItemIcon>
            <PianoIcon />
          </ListItemIcon>
          <ListItemText primary="Your Jam Sessions" />
        </ListItem>
        <ListItem button key="Messages" component={Link} to="/messages">
          <ListItemIcon>
            <ContactMailIcon />
          </ListItemIcon>
          <ListItemText primary="Messages" />
        </ListItem>
        <ListItem button key="Settings" component={Link} to="/settings">
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItem>
        <ListItem>
          <LogoutButton text={"Logout"} />
        </ListItem>
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  window: PropTypes.func,
};

export default ResponsiveDrawer;
