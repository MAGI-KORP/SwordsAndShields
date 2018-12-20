import React, { Component } from 'react';
import Typed from 'react-typed';

class Creation extends Component {
    render() {
        return (
            <div className="row">
            <div className="col-3"></div>            
                <div className="col-6">
                    <form>
                    <h2 className="main">Account Information</h2>
                        <div className="form-row">                      
                            <div className="form-group col-6">
                                <label for="username">Username:</label>
                                <input type="username" class="form-control" id="inputEmail4" placeholder="Email"></input>
                            </div>
                            <div className="form-group col-6">
                                <label for="password">Password:</label>
                                <input type="password" class="form-control" id="inputPassword4" placeholder="Password"></input>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-6">
                                <label for="characterName">Character Name:</label>
                                <input type="characterName" class="form-control" id="inputEmail4" placeholder="Email"></input>
                            </div>
                            <div className="form-row col-6">
                                <div className="form-group col-12">
                                    <label for="class">Class:</label><br/>
                                    <div className="col-4 class">
                                        <label class="radio-inline"><input type="radio" name="optradio" checked></input>  Warrior</label>
                                    </div>
                                    <div className="col-4 class">
                                        <label class="radio-inline"><input type="radio" name="optradio" checked></input>  Rogue</label>
                                    </div>
                                    <div className="col-4 class">
                                        <label class="radio-inline"><input type="radio" name="optradio" checked></input>  Mage</label>
                                    </div>                                                                                     
                                </div>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-12">
                            <label for="class">Backstory:</label><br/>
                                <textarea rows="4">
                                
                                </textarea> 
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

export default Creation