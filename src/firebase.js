import * as firebase from 'firebase';
  const config = {
    apiKey: "AIzaSyCsE02H1lFtW2RaRygITvr-uPUySj6aNco",
    authDomain: "wayfarer-38067.firebaseapp.com",
    databaseURL: "https://wayfarer-38067.firebaseio.com",
    projectId: "wayfarer-38067",
    storageBucket: "wayfarer-38067.appspot.com",
    messagingSenderId: "468268311649"
  };
  firebase.initializeApp(config);

  export const database = firebase.database().ref('/posts');