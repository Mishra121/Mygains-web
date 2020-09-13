import * as firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyCRH-C0ke6GUst6Mt78EXO8Lz5RL_n5dz4",
  authDomain: "mygains-india.firebaseapp.com",
  databaseURL: "https://mygains-india.firebaseio.com",
  projectId: "mygains-india",
  storageBucket: "mygains-india.appspot.com",
  messagingSenderId: "314584648897"
});

export default app;