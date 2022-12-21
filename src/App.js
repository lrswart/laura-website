import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import NavBar from './Components/NavBar';
// import About from './Components/About';
import Home from './Components/Home';
import About from './Components/About';

const NavBarLinks = [
  { url: "#", title: "Home"},
  { url: "/About", title: "About"},
  { url: "#", title: "Projects"}
];

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar navBarLinks={ NavBarLinks }>
        </NavBar>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/Home">
            <Home/>
          </Route>
          <Route path="/About">
            <About/>
          </Route>
        </Switch>
      </Router>
      
      
      
    </div>
    
  );
}

export default App;
