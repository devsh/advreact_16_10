import {appName} from '../config'
import {Record, OrderedMap} from 'immutable'

/**
 * Constants
 * */

export const moduleName = 'people'
const prefix = `${appName}/${moduleName}`

const PEOPLE_ADD = `${prefix}/PEOPLE_ADD`

/**
 * Reducer
 * */

export const ReducerRecord = Record({
    entities: new OrderedMap()
})

export const PeopleRecord = Record({
    id: null,
    firstName: null,
    lastName: null,
    email: null
})

export default function reducer(state = new ReducerRecord(), action) {
    const {type, payload} = action

    switch (type) {
        case PEOPLE_ADD:
            const {id} = payload
            return state.setIn(['entities', id], new PeopleRecord(payload))

        default:
            return state
    }
}

/**
 * Selectors
 * */



/**
 * Action Creators
 * */

export function peopleAdd(people) {
    return (dispatch) => {
        const id = (Date.now() + Math.random()).toString()

        dispatch({
            type: PEOPLE_ADD,
            payload: {
                ...people, id
            }
        })
    }
}