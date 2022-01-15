import firebase from 'firebase/app';
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDJyqOJgYqRLaCA26C8g4bptMlGtWEdlwQ",
    authDomain: "todo-app-3420c.firebaseapp.com",
    projectId: "todo-app-3420c",
    storageBucket: "todo-app-3420c.appspot.com",
    messagingSenderId: "276843381167",
    appId: "1:276843381167:web:5d42154029738156f6ef5a"
  };

  firebase.initializeApp(firebaseConfig);
  firebase.firestore();