// client/src/components/App.js
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "../pages/Home";
import Menu from "../pages/Menu";
import Review from "../pages/Review";
import LoginPage from "./LoginPage";
import Cart from "../pages/Cart";

function App() {

  return (
    <BrowserRouter>
    <Navbar />
      <div className="App">
        <Switch>
        <Route path="/cart">
            <Cart />
          </Route>
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
            <h4>(719) 725-3249</h4>
            <h4>1818 N Newberry Cir, Derby, KS 67037</h4>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;