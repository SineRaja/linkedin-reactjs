// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCO8bfguTRYJR0zKsWcvkurxIaUmn7M2cs",
    authDomain: "linkedin-clone-yt-b3ff6.firebaseapp.com",
    databaseURL: "https://linkedin-clone-yt-b3ff6-default-rtdb.firebaseio.com",
    projectId: "linkedin-clone-yt-b3ff6",
    storageBucket: "linkedin-clone-yt-b3ff6.appspot.com",
    messagingSenderId: "448920289093",
    appId: "1:448920289093:web:916d949c618050f049482c",
    measurementId: "G-6EL8HN7FKM"
  };

  const firebaseApp =   firebase.initializeApp(firebaseConfig);
  const auth = firebaseApp.auth();
  const db = firebaseApp.firestore();

  export {auth, db};