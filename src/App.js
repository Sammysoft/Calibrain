import React from "react";
import { Route } from 'react-router-dom'
import Homepage from "./pages/Homepage";
import Loginpage from "./pages/Loginpage";
import RegisterPage from "./pages/RegisterPage";
import DashboardPage from "./pages/Dashboardpage";
import AddStaffPage from "./pages/AddStaffPage";
import StudentsList from "./components/views/StudentsList";

function App() {
  return (
   <>
    <div>
      <Route path='/' exact component={Homepage} />
      <Route path='/auth' exact component={Loginpage} />
      <Route path='/register' exact component={RegisterPage} />
      <Route path="/dashboard" exact component={DashboardPage} />
      <Route path="/staff" exact component={AddStaffPage} />
      <Route path="/student" exact component={StudentsList} />

    </div>
   </>
  );
}

export default App;
