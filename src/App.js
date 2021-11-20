import { useState, useEffect } from 'react';
import './App.css';
import FirstTimerList from './components/FirstTimerList';
import { Nav } from './components/Nav';

 const App = () => {

  const [contacts, setContacts] = useState(null);
  const [error, setError] = useState(null);



  const fetchContacts = async()=>{
    const data = await fetch('http://localhost:8000/contactss');
    try {
      if(!data.ok){
        throw Error('Opps! Something went wrong. Please try again later .....')
      }
      const contacts = await data.json()
      setContacts(contacts)
    } catch (err) {
      setError(err.message)
    }
    
  }

  useEffect(() => {
   
    fetchContacts()
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <Nav register="Register New"/>
        {contacts && <FirstTimerList contacts={contacts}/>}
        {error && <div className="error-message">{error}</div>}
      </header>
    </div>
  );
  
}

export default App;
