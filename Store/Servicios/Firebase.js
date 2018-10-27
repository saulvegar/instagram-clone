import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyAxoQrHCpqAnn78x2fU-c5lRSgwBHSUt1A",
  authDomain: "instagram-clone-93bd0.firebaseapp.com",
  databaseURL: "https://instagram-clone-93bd0.firebaseio.com",
  projectId: "instagram-clone-93bd0",
  storageBucket: "instagram-clone-93bd0.appspot.com",
  messagingSenderId: "466947176052"
};

firebase.initializeApp(config);

export const autenticacion = firebase.auth();
export const baseDeDatos = firebase.database();