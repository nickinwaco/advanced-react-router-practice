import React from "react";
import TopNav from "./components/TopNav";
import SideNav from "./components/SideNav";
import Dashboard from "./components/Dashboard";
import Charts from "./components/charts";
import Tables from "./components/tables";
import Settings from "./components/settings";
import Wall from "./components/wall";
import Profiles from "./components/profiles";
import Marquee from "./components/marquee";
import Profile from "./components/profile";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <div id="wrapper">
          <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
            <TopNav />
            <SideNav />
          </nav>
          <div style={{backgroundColor: "white"}}>
            <Route exact path="/" component={Dashboard} />
            <Route path="/charts" component={Charts} />
            <Route path="/tables" component={Tables} />
            <Route path="/settings" component={Settings} />
            <Route path="/wall" component={Wall} />
            <Route path="/profiles" component={Profiles} />
            <Route path="/marquee/:text" component={Marquee} />
            <Route path="/profile/:id" component={Profile} />
          </div>
        </div>
      </div>
    </Router>
  );
}


export default App;
