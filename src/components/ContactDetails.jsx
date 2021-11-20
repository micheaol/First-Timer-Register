import { useParams } from 'react-router-dom';

const ContactDetails = () => {
    const { id } = useParams()
    return ( 
        <div className="contact-ContactDetails">
            <h1>Contact Details Page {id}</h1>
        </div>
     );
}
 
export default ContactDetails;