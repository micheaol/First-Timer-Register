
import './App.css';
import { Form } from './components/Form';
import { Nav } from './components/Nav';

 const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Nav/>
        <Form/>
      </header>
    </div>
  );
}

export default App;