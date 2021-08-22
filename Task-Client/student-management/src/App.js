import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from "./components/Home";
import Navbar from "./components/layout/Navbar";
import AddStudent from "./components/student/AddStudent";
import EditStudent from "./components/student/EditStudent";
import ViewStudent from "./components/student/ViewStudent";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/student/add" component={AddStudent} />
          <Route exact path="/student/edit/:id" component={EditStudent} />
          <Route exact path="/student/view/:id" component={ViewStudent} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
