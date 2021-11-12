import React from "react";
import { Route } from 'react-router-dom'
import Homepage from "./pages/Homepage";
import Loginpage from "./pages/Loginpage";
import RegisterPage from "./pages/RegisterPage";
import DashboardPage from "./pages/Dashboardpage";

function App() {
  return (
   <>
    <div>
      <Route path='/' exact component={Homepage} />
      <Route path='/auth' exact component={Loginpage} />
      <Route path='/register' exact component={RegisterPage} />
      <Route path="/dashboard" exact component={DashboardPage} />
    </div>
   </>
  );
}

export default App;
