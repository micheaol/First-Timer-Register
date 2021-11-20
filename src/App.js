import { useState } from 'react';
import './App.css';
import FirstTimerList from './components/FirstTimerList';
import { Nav } from './components/Nav';

 const App = () => {

  const [contacts, setContacts] = useState([
    {
      firstName: "Michael",
      lastName: "Oladele",
      phone: '012255421',
      id: 1
    },
    {
      firstName: "Rachel",
      lastName: "Oladele",
      phone: '012255421',
      id: 2
    },
    {
      firstName: "Matthew",
      lastName: "Oladele",
      phone: '012255421',
      id: 3
    },
    {
      firstName: "Light",
      lastName: "Oladele",
      phone: '012255421',
      id: 4
    },
    {
      firstName: "Joy",
      lastName: "Emordi",
      phone: '012255421',
      id: 5
    },
    {
      firstName: "Paul",
      lastName: "Oladele",
      phone: '012255421',
      id: 6
    },
  ])

  return (
    <div className="App">
      <header className="App-header">
        <Nav register="Register New"/>
        <FirstTimerList contacts={contacts}/>
        {/* <Form firstName ="Your Name"/> */}
      </header>
    </div>
  );
  
}

export default App;
