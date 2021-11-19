import './Form.css';
import React from "react";


class Form extends React.Component {
    render(){
        return (
            <div>
                <form className="form-class">
                <div className="form-row">
                    <div className="form-group col-md-6">
                    <label for="inputFirstname">{this.props.firstName}</label>
                    <input type="email" className="form-control" id="inputFirstName" placeholder="Firstname"/>
                    </div>
                    <div className="form-group col-md-6">
                    <label for="inputLastname">Lastname</label>
                    <input type="text" className="form-control" id="inputLastname" placeholder="Lastname"/>
                    </div>
                </div>
                <div className="form-group">
                    <label for="inputAddress">Address</label>
                    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"/>
                </div>
                <div className="form-group">
                    <label for="inputAddress2">Address 2</label>
                    <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                    <label for="inputPhone">Phone</label>
                    <input type="text" className="form-control" id="inputCity"/>
                    </div>
                    <div className="form-group col-md-4">
                    <label for="inputState">State</label>
                    <select id="inputState" className="form-control">
                        <option selected>Choose...</option>
                        <option>...</option>
                    </select>
                    </div>
                    <div className="form-group col-md-2">
                    <label for="inputZip">Zip</label>
                    <input type="text" className="form-control" id="inputZip"/>
                    </div>
                    </div>
                    <div className="form-group">
                        <div className="form-check">
                        </div>
                    </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            </div>
        )
    }
}

export default Form;