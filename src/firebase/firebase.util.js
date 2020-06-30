import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config ={
    apiKey: "AIzaSyDWtmReIpPJGErWiKiPASSPMWFeMdDC-Do",
    authDomain: "kv-db-f5795.firebaseapp.com",
    databaseURL: "https://kv-db-f5795.firebaseio.com",
    projectId: "kv-db-f5795",
    storageBucket: "kv-db-f5795.appspot.com",
    messagingSenderId: "987051329729",
    appId: "1:987051329729:web:8fd370f01553e0c5fe2c40",
    measurementId: "G-FVPYYTHR7D"
  };

  export const createUserProfileDocument =async (userAuth, additionalDate ) =>{
    if(!userAuth) return;

const userRef =firestore.doc(`users/${userAuth.uid}`)
const snapShot =await userRef.get();

    if(!snapShot.exists){
      const{displayName, email}= userAuth;
      const createdAt=new Date();

try {
  await userRef.set({
    displayName,
    email,
    createdAt,
    ...additionalDate
  })
} catch (error) {
  console.log('error creating user', error.message);
}

    }
return userRef;

  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider =new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;