import FirstTimerList from './components/FirstTimerList';
import useFetch from './useFetch';

const Home = () => {

    const { data: contacts, isLoading, error} = useFetch('http://localhost:8000/contacts')

    return ( 
       <div className="home">
            {isLoading && <div className="loading"></div>}
            {error && <div className="error-message">{error}</div>}
            {contacts && <FirstTimerList contacts={contacts}/>}
       </div>
        
     );
}
 
export default Home;