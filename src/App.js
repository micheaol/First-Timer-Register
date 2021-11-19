import React from 'react';
import './App.css';
import { Form } from './components/Form';
import { Nav } from './components/Nav';

class App extends React.Component {
  constructor(props){
    super(props);
  }

  render (){
    return (
      <div className="App">
        <header className="App-header">
          <Nav register="Register New"/>
          <Form />
        </header>
      </div>
    );
  }
}

export default App;
