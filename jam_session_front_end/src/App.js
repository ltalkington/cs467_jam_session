import "./App.css";
import { useAuth0 } from "@auth0/auth0-react";
import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import { AuthenticationGuard } from "./Components/Authenticate/AuthenticationGuard";
import LandingPage from "./Pages/LandingPage/LandingPage";
import NotFound from "./Pages/Application/404.js";
import JamSession from "./Pages/Application/JamSession.js";
import CreateJamSession from "./Pages/Application/CRUD/Jam_Session/CreateJamSession.js";
import Messages from "./Pages/Application/Messages.js";
import Posts from "./Pages/Application/Posts";
import Profile from "./Pages/Application/Profile";
import SearchResults from "./Pages/Application/SearchResults.js";
import Settings from "./Pages/Application/Settings.js";
import Timeline from "./Pages/Application/Timeline.js";
import YourJamSessions from "./Pages/Application/YourJamSessions.js";
import UpdateJamSession from "./Pages/Application/CRUD/Jam_Session/UpdateJamSession.js";

import "bootstrap/dist/css/bootstrap.css";

function App() {
  const { user, isLoading } = useAuth0();

  useEffect(() => {
    async function getUserProfile() {
      if (user) {
        try {
          await makeProfileIfNoProfile(user);
        } catch {}
      }
    }
    getUserProfile();
  }, [user]);

  if (isLoading) {
    return (
        <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            className="page-layout"
        >
          <CircularProgress />
        </div>
    );
  }
  return (
      <div className="App">
        <header className="App-header2">
          <Routes>
            <Route path="/" exact element={<LandingPage/>}/>
            <Route
                path="/profile"
                exact
                element={<AuthenticationGuard component={Profile}/>}
            />
            <Route
                path="/timeline"
                exact
                element={<AuthenticationGuard component={Timeline}/>}
            />
            <Route
                path="/posts"
                exact
                element={<AuthenticationGuard component={Posts}/>}
            />
            <Route
                path="/jamsessions"
                exact
                element={<AuthenticationGuard component={JamSession}/>}
            />
            <Route
                path="/yourjamsessions"
                exact
                element={<AuthenticationGuard component={YourJamSessions}/>}
            />
            <Route
                path="/createjamsession"
                exact
                element={<AuthenticationGuard component={CreateJamSession}/>}
            />
            <Route
                path="/updatejamsession"
                exact
                element={<AuthenticationGuard component={UpdateJamSession}/>}
            />

            <Route
                path="/messages"
                exact
                element={<AuthenticationGuard component={Messages}/>}
            />
            <Route
                path="/settings"
                exact
                element={<AuthenticationGuard component={Settings}/>}
            />
            <Route
                path="/searchresults"
                exact
                element={<AuthenticationGuard component={SearchResults}/>}
            />
            <Route path="*" element={<NotFound/>}/>
          </Routes>
        </header>
      </div>
  );
}

async function makeProfileIfNoProfile(user) {
  try {
    await fetch(`${process.env.REACT_APP_API_SERVER_URL}/user_profiles/${user.sub}`, {
      method: "GET"});
  } catch (error) {
    await makeUserIfNoUser();
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
      review_id: ""
    };
    await fetch(
        `${process.env.REACT_APP_API_SERVER_URL}/user_profiles`,
        {method: "POST", body: JSON.stringify(profile_inserts)}
    );
  }
}

async function makeUserIfNoUser(user) {
  try {
    await fetch(`${process.env.REACT_APP_API_SERVER_URL}/users/${user.sub}`,
        {method: "GET"});
  } catch (error) {
    let user_inserts = {
      user_id: user.sub,
      name: user.name,
      profile_link: "",
      email_address: user.email
    };
    await fetch(`${process.env.REACT_APP_API_SERVER_URL}/users`,
        {method: "POST", body: JSON.stringify(user_inserts)});
  }
}

export default App;
