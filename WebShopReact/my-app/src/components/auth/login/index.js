import React, { Component } from 'react'

export class LoginPage extends Component {

    state = {
        login: ""
    };

    changeValueLogin = (e) => {
        console.log('---e---', e);
        this.setState({login: e.target.value});
    }

    sendServerData = (e) => {
        e.preventDefault();
        console.log("----send data server---", this.state.login);
    }

    render() {
        const {login} = this.state;
        console.log("---state---", this.state);
        return (
            <div>
                <form>
                    <h1>Вхід на сайт</h1>
                    <div className="col-md-4">
                        <label htmlFor="login" className="form-label">First name</label>
                        <input type="text" className="form-control"
                            id="login" name="login" value={login}
                            onChange={this.changeValueLogin} />
                        <div className="valid-feedback">
                            Looks good!
                     </div>
                    </div>

                    <button className="btn btn-success"
                        onClick={this.sendServerData}>Вхід</button>
                </form>
            </div>
        )
    }
}

export default LoginPage
