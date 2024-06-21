import firebase from "firebase/compat/app"
import "firebase/compat/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyCZA0R-SjKcXULKEqdZ3VeBYKADn7jbZmk",
  authDomain: "url-shortern-ee96d.firebaseapp.com",
  projectId: "url-shortern-ee96d",
  storageBucket: "url-shortern-ee96d.appspot.com",
  messagingSenderId: "589836819989",
  appId: "1:589836819989:web:d81e962239c5c409b0b81c"
};

const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();

export default db;