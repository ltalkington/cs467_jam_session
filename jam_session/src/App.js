import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./Pages/LandingPage/LandingPage";
import NotFound from "./Pages/Application/404.js";
import JamSession from "./Pages/Application/JamSession.js";
import Messages from "./Pages/Application/Messages.js";
import Posts from "./Pages/Application/Posts";
import Profile from "./Pages/Application/Profile";
import SearchResults from "./Pages/Application/SearchResults.js";
import Settings from "./Pages/Application/Settings.js";
import Timeline from "./Pages/Application/Timeline.js";
import Login from "./Pages/Authentication/Login.js";
import Register from "./Pages/Authentication/Register.js";

import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div className="App">
      <header className="App-header2">
        <Router>
          <Routes>
            <Route path="/" exact element={<LandingPage />}></Route>
            <Route path="/login" exact element={<Login />}></Route>
            <Route path="/signup" exact element={<Register />}></Route>
            <Route path="/profile" exact element={<Profile />}></Route>
            <Route path="/timeline" exact element={<Timeline />}></Route>
            <Route path="/posts" exact element={<Posts />}></Route>
            <Route path="/jamsessions" exact element={<JamSession />}></Route>
            <Route path="/messages" exact element={<Messages />}></Route>
            <Route path="/settings" exact element={<Settings />}></Route>
            <Route
              path="/searchresults"
              exact
              element={<SearchResults />}
            ></Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
