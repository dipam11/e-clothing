import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCoCe7qt-tnI7eHehggYdP89i8-_xiHr_g",
  authDomain: "clothing-db-bafe2.firebaseapp.com",
  projectId: "clothing-db-bafe2",
  storageBucket: "clothing-db-bafe2.appspot.com",
  messagingSenderId: "1080686520932",
  appId: "1:1080686520932:web:6f28dbb151d5764b818d71",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
