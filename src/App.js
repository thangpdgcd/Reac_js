import './App.scss'
import Nav from './components/Navigation/Nav'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from './components/Login/Login';
const App = () => {
  return (
    <Router>
      <div className='app-container'>
        <Nav />
        <Switch>
          <Route path="/news">
            news
          </Route>
          <Route path="/about">
            about
          </Route>
          <Route path="/contact">
            contact
          </Route>
          <Route path="/login">
            <Login> Login</Login>
          </Route>
          <Route path="/" exact>
            home
          </Route>
          <Router path="*">
            not found
          </Router>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
