import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyCVXe6AumFr-WlEVvfmm60gcaz_g4AB0NA",
  authDomain: "neftlix-clone-5cb82.firebaseapp.com",
  projectId: "neftlix-clone-5cb82",
  storageBucket: "neftlix-clone-5cb82.appspot.com",
  messagingSenderId: "314077202829",
  appId: "1:314077202829:web:3dfa9d0a9a7b5a4d3695c4",
  measurementId: "G-55QJBPCFZX",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

// here it is a realtime database, it is gonna allow us what users subscription is
const db = firebaseApp.firestore();

const auth = firebase.auth();

export { auth };
export default db;
