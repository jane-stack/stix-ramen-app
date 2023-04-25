// client/src/components/App.js
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/testing">
            <h1>Test Route</h1>
          </Route>
          <Route path="/">
            <h1>Stix Ramen</h1>
            <p>We are located in Derby, KS off of Rocks Rd! Come on in and taste our delicious bowls of Ramen!</p>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;