import "./App.css";
import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
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
  const { isLoading } = useAuth0();

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
            path="/timeline"
            exact
            element={<AuthenticationGuard component={Timeline} />}
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
            path="/messages"
            exact
            element={<AuthenticationGuard component={Messages} />}
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
