import logo from "./logo.svg";
import "../src/Component/assets/css/style.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MainLayout from "../src/Component/pages/MainLayout";
import Login from "../src/Component/pages/Login";
import Register from "../src/Component/pages/Register";
import Navbar from "../src/Component/pages/Navbar";
import Developers from "../src/Component/pages/Developers";
import SingleUserProfile from "../src/Component/pages/SingleUserProfile";
import Dashboard from "../src/Component/pages/Dashboard";
import CreateProfile from "../src/Component/pages/CreateProfile";
import AddExperiance from "../src/Component/pages/AddExperiance";
import AddEducation from "../src/Component/pages/AddEducation";
import Posts from "../src/Component/pages/Posts";
import SinglePost from "../src/Component/pages/SinglePost";

function App() {
  return (
    <Router>
      <Navbar />
      <Route exact path="/" component={MainLayout} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/Register" component={Register} />
      <Route exact path="/developers" component={Developers} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/createProfile" component={CreateProfile} />
      <Route exact path="/addExperiance" component={AddExperiance} />
      <Route exact path="/addEducation" component={AddEducation} />
      <Route exact path="/posts" component={Posts} />
      <Route
        exact
        path="/singleUserProfile/:userId"
        component={SingleUserProfile}
      />
      <Route exact path="/singlPost/:userId" component={SinglePost} />
    </Router>
  );
}

export default App;
