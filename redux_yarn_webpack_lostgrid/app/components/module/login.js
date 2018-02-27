import React from 'react';
import render from 'react-dom';

class Login extends React.Component {
    
    constructor( props ){
        super( props );
        this.state = {
            isUserLoggedIn: false
        }
    }

    handleSubmit = ( e ) => {
        e.preventDefault();
        this.setState({
            isUserLoggedIn: true
        });
    }

    render() {
        return !this.state.isUserLoggedIn && (
            <form>
                <div className="form-row">
                    <input placeholder="username" />
                </div>
                <div className="form-row">
                    <input placeholder="password" type="password" />
                </div>
                <div className="form-row">
                    <button onClick={this.handleSubmit}>Submit</button>
                </div>
            </form>
        )
    }
}


export default Login;