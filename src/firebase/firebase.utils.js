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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) {
        return;
    }

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists){
        const { displayName, email } = userAuth;
        const createdAt = new Date();
  
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }   
    }

    return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
