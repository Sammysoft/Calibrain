import React from "react";
import { Route } from 'react-router-dom'
import Homepage from "./pages/Homepage";
import Loginpage from "./pages/Loginpage";
import DashboardPage from "./pages/Dashboardpage";

function App() {
  return (
   <>
    <div>
      <Route path='/' exact component={Homepage} />
      <Route path='/login' exact component={Loginpage} />
      <Route path="/dashboard" exact component={DashboardPage} />
    </div>
   </>
  );
}

export default App;
