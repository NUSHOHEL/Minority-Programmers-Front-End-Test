import React from "react";
import FirstIncubator from "./components/Incubator/FirstIncubator";
import NavBar from "./components/Shared/Navbar";
import SecondIncubator from "./components/SecondIncubator/SecondIncubator";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Learnmain from "./components/Learn/Learnmain/Learnmain";
import CourseInfo from "./components/Learn/CourseInfo/CourseInfo/CourseInfo";
import CustomeHome from "./components/CustomHome/CustomeHome";
import Footer from "./components/Shared/Footer/Footer";
import Tutorials from "./components/Learn/CourseInfo/Tutorials/Tutorials";
import Activity from "./components/Learn/CourseInfo/Tutorials/Activity/Activity";
function App() {
  return (
    <Router>
      <NavBar/>
      <Switch>
        <Route exact path='/'>
          <CustomeHome/>
        </Route>
        <Route path='/home'>
          <CustomeHome/>
        </Route>
        <Route path='/incubator'>
        <FirstIncubator/>
        </Route>
        <Route path='/learn'>
          <Learnmain/>
        </Route>
        <Route path='/courseinfo'>
          <CourseInfo/>
        </Route>
        <Route path='/startup-details'>
          <SecondIncubator/>
        </Route>
        <Route path='/weeks/:id'>
          <Tutorials/>
        </Route>
        <Route path='/video/:name'>
          <Activity/>
        </Route>
        
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
