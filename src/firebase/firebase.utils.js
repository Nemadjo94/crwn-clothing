import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAwQ-fXw7aJDLAS4qsedLskuwOZWjPCzVE",
    authDomain: "crwn-clothing-56e31.firebaseapp.com",
    databaseURL: "https://crwn-clothing-56e31.firebaseio.com",
    projectId: "crwn-clothing-56e31",
    storageBucket: "crwn-clothing-56e31.appspot.com",
    messagingSenderId: "398993855420",
    appId: "1:398993855420:web:59849295061ffa288611b9",
    measurementId: "G-3EMVLRZ95R"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
