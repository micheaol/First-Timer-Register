import './FirstTimerList.css';
import { Link } from 'react-router-dom';

const FirstTimerList = ({contacts}) => {

    return ( 
        <div className="first-timer-table">
            <table className="table table-dark">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Firstname</th>
                    <th scope="col">Lastname</th>
                    <th scope="col">Phone</th>
                    </tr>
                </thead>
                <tbody>
                        {contacts.map((contact)=>(
                           
                                <tr key={contact.id}>
                                    <th scope="row">{contact.id}</th>
                                    <td>{contact.firstName}</td>
                                    <td>{contact.lastName}</td>
                                    <td>{contact.phone}</td>
                                    <Link to={`/contacts/${contact.id}`}>
                                       <button type="button" className="btn btn-dark">View</button>
                                    </Link>
                                </tr>
                            
                            
                        
                        ))}
                </tbody>
            </table>
        </div>
     );
}
 
export default FirstTimerList;