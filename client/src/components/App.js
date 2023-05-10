// client/src/components/App.js
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "../pages/Home";
import Menu from "../pages/Menu";
import Review from "../pages/Review";
import LoginPage from "../pages/LoginPage";
// import Cart from "../pages/Cart";
import Footer from "./Footer";

function App() {

  return (
    <BrowserRouter>
    <Navbar />
      <div className="App">
        <Switch>
        {/* <Route path="/cart">
            <Cart />
          </Route> */}
          <Route path="/review">
            <Review />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/menu">
            <Menu />
          </Route>
          <Route path="/">
            <Home />
            <h4>The most savory ramen you'll ever taste. A taste hard to forget!</h4>
          </Route>
        </Switch>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;