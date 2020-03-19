import React, { Component, Fragment } from 'react'

import Input from '../common/Input'
import Button from '../common/Button'

class Login extends Component {

    state = {
        userName: null,
        password: null,
    }

    clickHandler = () => {
        alert('clicked')
    }

    changeHandler = (name, value) => {
        this.setState({[name]: value})
    }

    render () {
        let {userName, password} = this.state;

        return (
            <Fragment>
                <form className="form">
                    <h3>Login Form</h3>
                    <div className="form-block">
                        <Input type="text" name="userName" value={userName} label="Username" changeHandler={this.changeHandler} />
                        
                        <Input type="password" name="password" value={password} label="Password" changeHandler={this.changeHandler} />

                        <Button type="button" clickHandler={this.clickHandler} value="Login"/>
                    </div>
                </form>
            </Fragment>
        )
    }
}

export default Login