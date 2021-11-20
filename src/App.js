import { useState, useEffect } from 'react';
import './App.css';
import FirstTimerList from './components/FirstTimerList';
import { Nav } from './components/Nav';

 const App = () => {

  const [contacts, setContacts] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);



  const fetchContacts = async()=>{
    const data = await fetch('http://localhost:8000/contacts');
    try {
      if(!data.ok){
        throw Error('Opps! Something went wrong. Please try again later .....')
      }
      const contacts = await data.json()
      setContacts(contacts)
      setIsLoading(false);
      setError(null);

    } catch (err) {
      setError(err.message)
      setIsLoading(false);
    }
    
  }

  useEffect(() => {
   
    fetchContacts()
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <Nav register="Register New"/>
        {isLoading && <div className="loading"></div>}
        {error && <div className="error-message">{error}</div>}
        {contacts && <FirstTimerList contacts={contacts}/>}
        
      </header>
    </div>
  );
  
}

export default App;
