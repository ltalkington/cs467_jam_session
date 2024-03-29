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
import CreateTextPost from "./Pages/Application/CRUD/Timeline/CreateTextPost.js";
import CreateVideoPost from "./Pages/Application/CRUD/Timeline/CreateVideoPost.js";
import UpdateVideoPost from "./Pages/Application/CRUD/YourPosts/UpdateYourVideoPost.js";
import CreateMessages from "./Pages/Application/CRUD/Messages/CreateMessage.js";
import UpdateTextPost from "./Pages/Application/CRUD/YourPosts/UpdateYourPosts.js";
import UpdateUserProfile from "./Pages/Application/CRUD/Profile/UpdateProfile";
import MoreInfo from "./Pages/MoreInfo.js";
import Review from "./Pages/Application/Reviews.js";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  const { user, isLoading } = useAuth0();

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
          <Route path="/" exact element={<LandingPage />} />
          <Route
            path="/profile"
            exact
            element={<AuthenticationGuard component={Profile} />}
          />
          <Route
            path="/startupinfo"
            exact
            element={<AuthenticationGuard component={MoreInfo} />}
          />
          <Route
            path="/updateprofile"
            exact
            element={<AuthenticationGuard component={UpdateUserProfile} />}
          />
          <Route
            path="/timeline"
            exact
            element={<AuthenticationGuard component={Timeline} />}
          />
          <Route
            path="/createtextpost"
            exact
            element={<AuthenticationGuard component={CreateTextPost} />}
          />
          <Route
            path="/updatetextpost"
            exact
            element={<AuthenticationGuard component={UpdateTextPost} />}
          />
          <Route
            path="/createvideopost"
            exact
            element={<AuthenticationGuard component={CreateVideoPost} />}
          />
          <Route
            path="/updatevideopost"
            exact
            element={<AuthenticationGuard component={UpdateVideoPost} />}
          />
          <Route
            path="/posts"
            exact
            element={<AuthenticationGuard component={Posts} />}
          />
          <Route
            path="/jamsessions"
            exact
            element={<AuthenticationGuard component={JamSession} />}
          />
          <Route
            path="/yourjamsessions"
            exact
            element={<AuthenticationGuard component={YourJamSessions} />}
          />
          <Route
            path="/createjamsession"
            exact
            element={<AuthenticationGuard component={CreateJamSession} />}
          />
          <Route
            path="/updatejamsession"
            exact
            element={<AuthenticationGuard component={UpdateJamSession} />}
          />
          <Route
            path="/review"
            exact
            element={<AuthenticationGuard component={Review} />}
          />

          <Route
            path="/messages"
            exact
            element={<AuthenticationGuard component={Messages} />}
          />
          <Route
            path="/createmessage"
            exact
            element={<AuthenticationGuard component={CreateMessages} />}
          />
          <Route
            path="/settings"
            exact
            element={<AuthenticationGuard component={Settings} />}
          />
          <Route
            path="/searchresults"
            exact
            element={<AuthenticationGuard component={SearchResults} />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
