import React,{useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';

//react router
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom"

//Toast
import {ToastContainer} from "react-toastify"
import "react-toastify/dist/ReactToastify.min.css"

//firebase
import firebase from "firebase/app"
import "firebase/auth"

//Components
import Home from "./Pages/Home"
import SignIn from "./Pages/SignIn"
import SignUp from "./Pages/SignUp"
import NotFound from "./Pages/NotFound"

//Context
import { UserContext } from './Context/UserContext';
import Footer from './Layout/Footer';
import Header from './Layout/Header';

//init firebase config
import firebaseConfig from "./Config/firebaseConfig"
firebase.initializeApp(firebaseConfig)

const App = () => {
  const [user,setUser] = useState(null);
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <ToastContainer/>
      <UserContext.Provider value={{user,setUser}}>
        <Header/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/SignIn" component={SignIn} />
          <Route exact path="/SignUp" component={SignUp} />
          <Route exact path="/*" component={NotFound} />
        </Switch>
        <Footer/>
      </UserContext.Provider>
    </Router>
  );
}

export default App;
