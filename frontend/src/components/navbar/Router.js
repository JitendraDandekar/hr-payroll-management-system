import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Home from "../home/Home";
import Login, { Logout } from "../accounts/Login";
import AddEmployee from "../employees/AddEmployee";
import ViewEmployees from "../employees/ViewEmployees";
import UpdateEmployee from "../employees/UpdateEmployee";
import Salary from "../salary/Salary";
import AdminPanel from "../adminPanel/AdminPanel";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/admin-panel">
          <Navbar />
          <AdminPanel />
        </Route>
        <Route path="/salary">
          <Navbar />
          <Salary />
        </Route>
        <Route path="/update-employee">
          <Navbar />
          <UpdateEmployee />
        </Route>
        <Route path="/view-employees">
          <Navbar />
          <ViewEmployees />
        </Route>
        <Route path="/add-employee">
          <Navbar />
          <AddEmployee />
        </Route>
        <Route path="/home">
          <Navbar />
          <Home />
        </Route>
        <Route path="/logout" component={Logout} />
        <Route path="/" component={Login} />
      </Switch>
    </BrowserRouter>
  );
}
export default Router;
