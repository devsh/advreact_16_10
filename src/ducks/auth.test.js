import {call, put, take} from 'redux-saga/effects'
import firebase from 'firebase'
import {
    signIn, signUpSaga, signUp, SIGN_UP_START, SIGN_UP_SUCCESS, SIGN_UP_ERROR, signInSaga,
    SIGN_IN_SUCCESS, SIGN_IN_REQUEST, SIGN_IN_ERROR
} from "./auth"

const preparingForSignUp = () => {
    const email = "test@domovenok.su", password = "12345678"
    const auth = firebase.auth()

    const gen = signUpSaga()

    expect(gen.next().value).toEqual(take(SIGN_UP_START))

    const requestAction = signUp(email, password)

    expect(gen.next(requestAction).value).toEqual(call([auth, auth.createUserWithEmailAndPassword], email, password))

    const user = {something: '...'}

    return {gen, user}
}

it('should sign up success', () => {
    const {gen, user} = preparingForSignUp()

    expect(gen.next(user).value).toEqual(put({
        type: SIGN_UP_SUCCESS,
        payload: { user }
    }))
})

it('should sign up error', () => {
    const {gen, user} = preparingForSignUp()
    const error = new Error('error')

    expect(gen.throw(error).value).toEqual(put({
        type: SIGN_UP_ERROR,
        payload: { error }
    }))
})

const preparingForSignIn = () => {
    const email = "test@domovenok.su", password = "12345678"
    const auth = firebase.auth()

    const gen = signInSaga()

    expect(gen.next().value).toEqual(take(SIGN_IN_REQUEST))

    const requestAction = signIn(email, password)

    expect(gen.next(requestAction).value).toEqual(call([auth, auth.signInWithEmailAndPassword], email, password))

    const user = {something: '...'}

    return {gen, user}
}

it('should sign in success', () => {
    const { gen, user } = preparingForSignIn()

    expect(gen.next(user).value).toEqual(put({
        type: SIGN_IN_SUCCESS,
        payload: { user }
    }))
})

it('should sign in error', () => {
    const { gen, user } = preparingForSignIn()
    const error = new Error('smth error')

    expect(gen.throw(error).value).toEqual(put({
        type: SIGN_IN_ERROR,
        payload: { error }
    }))
})