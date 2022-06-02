import firebase from 'firebase';
// add SDK Firebase
const firebaseConfig = {
    apiKey: "AIzaSyC1xXZMZXk0pSjtZc2OLQWqS_zIZNeJe80",
    authDomain: "classtest-1cc63.firebaseapp.com",
    projectId: "classtest-1cc63",
    storageBucket: "classtest-1cc63.appspot.com",
    messagingSenderId: "118375799986",
    appId: "1:118375799986:web:dad547baa59e0db8c23dab"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase.database();
