import firebase from 'firebase'

export const appName = 'advreact-1610-e107b'

firebase.initializeApp({
    apiKey: "AIzaSyBxoVzxv_5uMbGSHc_rpqppejalCO0qy3Y",
    authDomain: `${appName}.firebaseapp.com`,
    databaseURL: `https://${appName}.firebaseio.com`,
    projectId: appName,
    storageBucket: "",
    messagingSenderId: "250560019576"
})