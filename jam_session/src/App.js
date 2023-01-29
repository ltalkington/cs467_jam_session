import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div className="App">
      <header className="App-header2">
        <Router>
          <Routes>
            <Route path="/" exact element={<LandingPage></LandingPage>}></Route>
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
