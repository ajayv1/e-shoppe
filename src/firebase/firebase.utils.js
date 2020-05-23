import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDyEImOx_JxPCt0Wv6rOUks-vH7YQpnYbg",
  authDomain: "crwn-final.firebaseapp.com",
  databaseURL: "https://crwn-final.firebaseio.com",
  projectId: "crwn-final",
  storageBucket: "crwn-final.appspot.com",
  messagingSenderId: "1006952483688",
  appId: "1:1006952483688:web:81bd68989994bad62be4dd"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async(userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName, 
        email,
        createdAt,
        ...additionalData
      });
    } catch (err) {
      console.log('error creating user', err.message);
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