import './Form.css';
import React, { useState } from "react";
import { useHistory } from 'react-router-dom';


const Form = () => {

    const [ firstName, setFirstName ]  = useState('');
    const [ lastName, setLastName] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone ] =useState('');
    const [status, setStatus] = useState('First-timer');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory()


    const handleSubmit = (e)=>{
        e.preventDefault();
        const contacts = { firstName, lastName, address, phone, status};

        setIsPending(true)

        fetch('http://localhost:8000/contacts', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(contacts)
        })
        .then(()=>{
            setIsPending(false)
            history.push('/')
            
            
        })
    }

    return ( 
        <div>

        <form className="form-class" onSubmit={handleSubmit}>
        <h1></h1>
        <div className="form-row">
            <div className="form-group col-md-6">
            <label htmlFor="inputFirstname">Firstname</label>
            <input type="text" className="form-control" id="inputFirstName" placeholder="Firstname" required value={firstName}
            onChange={(e)=> setFirstName(e.target.value)}
            />
            </div>
            <div className="form-group col-md-6">
            <label htmlFor="inputLastname">Lastname</label>
            <input type="text" className="form-control" required id="inputLastname" placeholder="Lastname"
                value={lastName}
                onChange={(e)=> setLastName(e.target.value)}
            />
            </div>
        </div>
        <div className="form-group">
            <label htmlFor="inputAddress">Address</label>
            <input type="text" required className="form-control" id="inputAddress" placeholder="1234 Main St"
                value={address}
                onChange={(e)=> setAddress(e.target.value)}
            />
        </div>
        <div className="form-row">
            <div className="form-group col-md-7">
            <label htmlFor="inputPhone">Phone</label>
            <input placeholder="Phone number" required type="text" className="form-control" id="inputCity"
                value={phone}
                onChange={(e)=> setPhone(e.target.value)}
            />
            </div>
            <div className="form-group col-md-4">
            <label htmlFor="inputState">Status</label>
            <select id="inputState" className="form-control"
                value={status}
                onChange={(e)=> setStatus(e.target.value)}
            >
                <option>First-timer</option>
                <option>New-convert</option>
            </select>
      </div>
        </div>
        {!isPending && <button type="submit" className="btn btn-primary">Submit</button>}
        {isPending && <button type="submit" disabled className="btn btn-primary">Creating contact....</button>}
    </form>
    </div>
     );
}
 
export default Form;

