import firebase from 'firebase/app';
import 'firebase/auth';

// Initialize Firebase
const firebaseConfig = {

  apiKey: "AIzaSyD1Li4OldR_Ux2h01WVqAkunLGt9Epxaq8",
  authDomain: "fir-pdm202102-78c85.firebaseapp.com",
  projectId: "fir-pdm202102-78c85",
  storageBucket: "fir-pdm202102-78c85.appspot.com",
  messagingSenderId: "719981721841",
  appId: "1:719981721841:web:1210cc527741bc98459150"

};

let Firebase;

if (firebase.apps.length === 0) {
  Firebase = firebase.initializeApp(firebaseConfig);
}

export default Firebase;
