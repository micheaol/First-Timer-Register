
import './App.css';
import  Form  from './components/Form';
import { Nav } from './components/Nav';

 const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Nav register="Register New"/>
        <Form firstName ="Your Name"/>
      </header>
    </div>
  );
  
}

export default App;
