import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBgLlHauHrmNZkU2A4kk5WM_gHQKsw3608",
  authDomain: "expense-tracker-1a584.firebaseapp.com",
  databaseURL: "https://expense-tracker-1a584.firebaseio.com",
  projectId: "expense-tracker-1a584",
  storageBucket: "expense-tracker-1a584.appspot.com",
  messagingSenderId: "675550681215",
  appId: "1:675550681215:web:f53497121293f9de62874a",
});

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db, auth };
