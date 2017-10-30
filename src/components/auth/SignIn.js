import React, { Component } from 'react'
import {reduxForm, Field} from 'redux-form'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {userSelector, loadingSelector} from '../../ducks/auth'
import Loader from "../common/Loader";

class SignIn extends Component {
    static propTypes = {

    };

    render() {
        const {loading, user, handleSubmit} = this.props

        if (loading) return <Loader />
        console.log('----', user)
        if (user) return <Redirect to = '/people' />
        return (
            <div>
                <h3>Sign In</h3>
                <form onSubmit = {handleSubmit}>
                    <div>
                        email: <Field name = 'email' component = 'input' type = 'text'/>
                    </div>
                    <div>
                        password: <Field name = 'password' component = 'input' type = 'password'/>
                    </div>
                    <div>
                        <input type = 'submit'/>
                    </div>
                </form>
            </div>
        )
    }
}

const SignInForm = reduxForm({
    form: 'auth'
})(SignIn)

const mapStateToProps = (state) => ({
    user: userSelector(state),
    loading: loadingSelector(state)
})

export default connect(mapStateToProps)(SignInForm)