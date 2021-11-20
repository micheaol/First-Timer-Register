
import './App.css';
import Home from './Home';
import Form from './components/Form'
import ContactDetails from './components/ContactDetails'
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
                <Route path="/contacts/:id">
                    <ContactDetails />
                </Route>
            </Switch>
         </div>
    </div>
    </Router>
  );
  
}

export default App;
