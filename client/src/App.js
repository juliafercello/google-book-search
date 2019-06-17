import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SavedBooks from "./pages/SavedBooks";
import Search from "./pages/Search";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={SavedBooks} />
          <Route exact path="/books" component={SavedBooks} />
          <Route exact path="/search" component={Search} />
          <Route component={SavedBooks} />

        </Switch>
      </div>
    </Router>
  );
}

export default App;
