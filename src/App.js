import './App.css';
import React from 'react';
import {Switch,Route,Link} from "react-router-dom";
import AdminLogin from './Admin/AdminLogin'
import Dashboard from './Admin/Dashboard';

function App() {
  return (
    <div>
      <Switch>
        <Route path="/admin" exact>
          <AdminLogin/>
        </Route>
        <Route path="/admin/dashboard" exact>
          <Dashboard/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
