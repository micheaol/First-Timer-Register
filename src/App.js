
import './App.css';
import FirstTimerList from './components/FirstTimerList';
import { Nav } from './components/Nav';
import useFetch from './useFetch';

 const App = () => {

 const { data: contacts, isLoading, error} = useFetch('http://localhost:8000/contacts')

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
