import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import splash from "./pages/splash";
import search from "./pages/search";
// import saved from "./pages/saved";

// Run "npm start" to start React app.
// Run "npm i" or "npm i [specific component name]" in the command line if there are any dependencies missing in the node modules folder.

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={splash} />
          <Route exact path="/search" component={search} />
          {/* <Route exact path="/saved" component={saved} /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;