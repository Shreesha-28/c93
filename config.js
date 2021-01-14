import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyDErahwFOclQIOond2g8alqjWcxVIG_sU4",
    authDomain: "resource-management-software.firebaseapp.com",
    projectId: "resource-management-software",
    storageBucket: "resource-management-software.appspot.com",
    messagingSenderId: "604906217373",
    appId: "1:604906217373:web:b7a493456f42354b60d974",
    measurementId: "G-LTFVJL3SRN"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
  