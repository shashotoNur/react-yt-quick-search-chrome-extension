import { Route, Switch } from 'react-router-dom';

import { About } from "./components/About";
import { Home } from "./components/Home";

const App = () =>
  {
      return (
        <div className="App">
          <Switch>
              <Route path="/about"> <About/> </Route>
              <Route path="/"> <Home/> </Route>
          </Switch>
        </div>
      )
  };

export default App;