import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter
} from "react-router-dom";
import Users from './views/Users/Users';
function App() {
  return (
    <div className="App">

      <Router>
        <header className="App-header">

          <Switch>
            <Route path="/" exact>
              <Users />
            </Route>
          </Switch>


        </header>
      </Router>
    </div>
  );
}

export default App;
