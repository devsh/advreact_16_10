import React, { Component } from 'react'
import {reduxForm, Field} from 'redux-form'
import emailValidator from 'email-validator'
import ErrorField from '../common/ErrorField'

class PeopleAdd extends Component {

    render() {
        return (
            <div>
                <h3>People add</h3>
                <form onSubmit={this.props.handleSubmit}>
                    <Field name='firstName' component={ErrorField} type='text' label='First name' />
                    <Field name='lastName' component={ErrorField} type='text' label='Last name' />
                    <Field name='email' component={ErrorField} type='text' label='Email' />

                    <div>
                        <input type = 'submit' disabled={this.props.invalid}/>
                    </div>
                </form>
            </div>
        )
    }
}

const validate = ({ firstName, lastName, email }) => {
    const errors = {}

    if (!firstName) errors.firstName = 'First name is required field'
    if (!lastName) errors.lastName = 'Last name is required field'
    if (!email) errors.email = 'Email is required field'

    if (email && !emailValidator.validate(email)) errors.email = 'Email is not valid'

    console.log('-----sadf')

    return errors
}

const PeopleAddForm = reduxForm({ form: 'peopleAdd', validate })(PeopleAdd)

export default PeopleAddForm
