import { useParams } from 'react-router-dom';
import useFetch from '../useFetch';
import '../ContactDetails.css'


const ContactDetails = () => {
    const { id } = useParams()
    const { data: contacts, isLoading, error} = useFetch('http://localhost:8000/contacts/' + id)
    return ( 
        <div className="contact-ContactDetails">
            {isLoading && <div className="loading"></div>}
            {error && <div>{error}</div>}
            {contacts && (
                <article>
                    <h1>Name : {contacts.firstName} - {contacts.lastName}</h1>
                    <h2>Address: {contacts.address}</h2>
                    <h2>{contacts.phone}</h2>
                </article>
            )}
        </div>
     );
}

 
export default ContactDetails;