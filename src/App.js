
import './App.css';
import Home from './Home';
import Form from './components/Form';
import { Nav } from './components/Nav';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

 const App = () => {

  return (
    <Router>
        <div className="App">
        <Nav register="Register New"/>
         <div className="content">
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/add-contact">
                    <Form />
                </Route>
            </Switch>
         </div>
    </div>
    </Router>
  );
  
}

export default App;
