import './Form.css';
import React from "react";



export const Form = () => {
    return (
        <div>
            <form className="form-class">
            <div className="form-row">
                <div className="form-group col-md-6">
                <label for="text">Firstname</label>
                <input type="email" className="form-control" id="inputFirstName" placeholder="Email"/>
                </div>
                <div className="form-group col-md-6">
                <label for="text">Lastname</label>
                <input type="text" className="form-control" id="inputLastname" placeholder="text"/>
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
                <label for="inputCity">City</label>
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
                    <input className="form-check-input" type="checkbox" id="gridCheck"/>
                    <label className="form-check-label" for="gridCheck">
                        Check me out
                    </label>
                    </div>
                </div>
            <button type="submit" className="btn btn-primary">Sign in</button>
        </form>
        </div>
    )
}