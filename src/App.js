import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Books from "./Components/Books/Books";
import Carts from "./Components/Carts/Carts";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Navbarr from "./Components/NavBar/Navbar";
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
          <Route path="/users">
            <Books />
          </Route>
          <Route path="/footer">
            <Footer />
          </Route>
          <Route path="/carts">
            <Carts />
          </Route>
        </Switch>
    </Router>
    </>
  );
}

export default App;
