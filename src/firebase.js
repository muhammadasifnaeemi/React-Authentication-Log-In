import firebase from 'firebase/app'
import 'firebase/auth'



const app = firebase.initializeApp({
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain:process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL : process.env.REACT_APP_FIREBASE_DATABASE_URL,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID ,
    appId:  process.env.REACT_APP_FIREBASE_APP_ID 

    // apiKey: "AIzaSyAbFzJfokhIcU1JHLU7xmSnBTDHKxg4xSM",
    // authDomain: "auth-development-9f42a.firebaseapp.com",
    // databaseURL: "https://auth-development-9f42a-default-rtdb.firebaseio.com",
    // projectId: "auth-development-9f42a",
    // storageBucket: "auth-development-9f42a.appspot.com",
    // messagingSenderId: "319460062573",
    // appId: "1:319460062573:web:b82122b35862591d5b9664"
})


 export const auth = app.auth()
 export default app