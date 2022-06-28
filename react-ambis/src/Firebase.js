import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

const settings = { timestampsInSnapshots: true };

const firebaseConfig = {
    apiKey: "AIzaSyANIH1jLtxdcFRadlcDOJ_v2SJdOdcifWk",
    authDomain: "ambis-9ebd6.firebaseapp.com",
    projectId: "ambis-9ebd6",
    storageBucket: "ambis-9ebd6.appspot.com",
    messagingSenderId: "253175615587",
    appId: "1:253175615587:web:b5c5897dad6cfd189b6856",
    measurementId: "G-BF310BQ2PD"
};

firebase.initializeApp(firebaseConfig)
export const auth = firebase.auth()
firebase.firestore().settings(settings)
export default firebase