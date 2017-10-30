import {addPersonSaga, addPerson, ADD_PERSON} from './people'
import {generateId} from './utils'
import {call, put} from 'redux-saga/effects'

it('should add person', () => {
    const person = {
        firstName: 'Roman',
        lastName: 'Iakobchuk',
        email: 'r.iakobchuk@javascript.ru'
    }

    const requestAction = addPerson(person)

    const gen = addPersonSaga(requestAction)

    expect(gen.next().value).toEqual(call(generateId))

    const id = generateId()

    expect(gen.next(id).value).toEqual(put({
        type: ADD_PERSON,
        payload: { id, ...person }
    }))
})