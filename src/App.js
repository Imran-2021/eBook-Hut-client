import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from "./Components/About/About";
import Admin from "./Components/Admin/Admin";
import BookDetails from "./Components/Books/BookDetails";
import Books from "./Components/Books/Books";
import Carts from "./Components/Carts/Carts";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Navbarr from "./Components/NavBar/Navbar";
import NoFound from "./Components/NoFound/NoFound";
import PrivateRoute from "./Components/SignIn/PrivateRoute";
import SIgnIn from "./Components/SignIn/SIgnIn";
import SIgnUp from "./Components/SignIn/SignUp";
export const userContext = createContext();
function App() {
  const [loggedInUser,setLoggedInUser]=useState({})
  return (
    <userContext.Provider value={[loggedInUser,setLoggedInUser]}>
       <Router>
         <Navbarr/>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/books">
            <Books />
          </Route>
          <Route path="/footer">
            <Footer />
          </Route>
          <Route path="/carts">
            <Carts />
          </Route>
          <Route path="/contact">
            <Contact/>
          </Route>
          <Route path="/sign-in">
            <SIgnIn />
          </Route>
          <Route path="/sign-up">
            <SIgnUp />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/admin">
            <Admin/>
          </Route>
          <Route path="/details/:idd">
            <BookDetails/>
          </Route>
          <Route path="*">
            <NoFound/>
          </Route>
        </Switch>
        <Footer/>
    </Router>
    </userContext.Provider>
  );
}

export default App;
