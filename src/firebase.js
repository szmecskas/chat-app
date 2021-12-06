import firebase from "firebase/app"
import "firebase/auth"
import { initializeApp } from "firebase/app";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const auth = firebase.initializeApp({
    apiKey: "AIzaSyDdi4IOmKDVxp7IHjJSfOUDEU3X_LScoJs",
    authDomain: "chat-app-fd097.firebaseapp.com",
    projectId: "chat-app-fd097",
    storageBucket: "chat-app-fd097.appspot.com",
    messagingSenderId: "232495488899",
    appId: "1:232495488899:web:035cea1be307aef82ba0b6",
    measurementId: "G-YHBESFMZBX"
  }).auth();