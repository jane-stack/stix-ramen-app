// client/src/components/App.js
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Menu from "../pages/Menu";
import Review from "../pages/Review";
import LoginPage from "./LoginPage";

function App() {

  return (
    <BrowserRouter>
    <Navbar />
      <div className="App">
        <Switch>
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
            <h1>Stix Ramen</h1>
            <p>We are located in Derby, KS off of Rocks Rd! Come on in and taste our delicious bowls of savory Ramen!</p>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;