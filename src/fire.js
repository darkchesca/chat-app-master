import firebase from "firebase";
import "firebase/firestore";

var config = {
  apiKey: "AIzaSyAihazq70vJmAms4e1Mtkog-tg60hsBAPo",
  authDomain: "my-first-firebase-projec-696c1.firebaseapp.com",
  databaseURL: "https://my-first-firebase-projec-696c1.firebaseio.com",
  projectId: "my-first-firebase-projec-696c1",
  storageBucket: "my-first-firebase-projec-696c1.appspot.com",
  messagingSenderId: "92769039584",
  appId: "1:92769039584:web:d3d0a6baeeb353ca340c85"
};

var fire = firebase.initializeApp(config);
export default fire;
