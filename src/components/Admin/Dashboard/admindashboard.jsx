import React, { useState } from "react";

import Sidebar from "../Sidebar/Sidebar";
import Useradmin from "../UserAdmin/useradmin";

import "./Dashboard.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "../../Login";
function AdminDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const openSidebar = () => {
    setSidebarOpen(true);
  };
  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <Router>
      <Route path="/login" component={Login} />

      <div className="dashboardContainer">
        <Sidebar />
        <Switch>
          <Route exact path="/admindashboard">
            <Useradmin />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default AdminDashboard;
