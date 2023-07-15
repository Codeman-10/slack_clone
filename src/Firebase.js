import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDyag9wXFbDemceGSB2p8F-CGc1qSJ99II",
  authDomain: "slack-clone-yt-fbf4d.firebaseapp.com",
  projectId: "slack-clone-yt-fbf4d",
  storageBucket: "slack-clone-yt-fbf4d.appspot.com",
  messagingSenderId: "248579592733",
  appId: "1:248579592733:web:724e6f293226febed4acf4"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, db, provider };