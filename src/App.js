import React from "react";
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
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Navbarr from "./Components/NavBar/Navbar";
import NoFound from "./Components/NoFound/NoFound";
import SIgnIn from "./Components/SignIn/SIgnIn";
function App() {
  return (
    <>
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
          <Route path="/sign-in">
            <SIgnIn />
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
    </Router>
    </>
  );
}

export default App;
