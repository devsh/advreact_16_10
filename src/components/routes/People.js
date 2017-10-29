import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Route} from 'react-router-dom'
import PeopleAdd from '../people/PeopleAdd'
import {peopleAdd} from '../../ducks/people'

class PeoplePage extends Component {

    render() {
        return (
            <div>
                <Route path = '/people' exact render = { () => <PeopleAdd onSubmit = {this.handlePeopleAdd} /> } />
            </div>
        )
    }

    handlePeopleAdd = (values) => {
        this.props.peopleAdd(values)
    }
}

export default connect(null, { peopleAdd })(PeoplePage)
