import React, { Component } from 'react';
import Typed from 'react-typed';

class Registration extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-3"></div>            
                    <div className="col-6">
                        <form>
                        <h2 className="main">Account Information</h2>
                            <div className="form-row">                      
                                <div className="form-group col-12">
                                    <label for="username">Username:</label>
                                    <input type="username" class="form-control" id="inputEmail4" placeholder="Email"></input>
                                </div>
                                <div className="form-group col-12">
                                    <label for="password">Password:</label>
                                    <input type="password" class="form-control" id="inputPassword4" placeholder="Password"></input>
                                </div>
                            </div>
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                <div className="col-3"></div>  
            </div>
        )
    }
}

export default Registration