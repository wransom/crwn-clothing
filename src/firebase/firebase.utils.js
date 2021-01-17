import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
    apiKey: "AIzaSyA1LPOrq6xKPELcqHLIvyT91gSAsxR82xI",
    authDomain: "crwn-db-c99d2.firebaseapp.com",
    projectId: "crwn-db-c99d2",
    storageBucket: "crwn-db-c99d2.appspot.com",
    messagingSenderId: "210967394089",
    appId: "1:210967394089:web:e0bce65674fee9f54b2938"
  };

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    //console.log(snapShot);

    if(!snapShot.exists) {
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
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'})
  
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;