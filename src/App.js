import './App.scss'
import Nav from './components/Navigation/Nav'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from './components/Login/Login';
import Register from './components/Register/register';

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
            <Login />
          </Route>
          <Router path="/register">
            <Register />
          </Router>
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
