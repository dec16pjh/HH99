import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
//   인증정보를 넣어주세요!

apiKey: "AIzaSyAv7tVjQtyYlHxJbpyrq73pp9sA9epMGds",
authDomain: "johnreact.firebaseapp.com",
projectId: "johnreact",
storageBucket: "johnreact.appspot.com",
messagingSenderId: "645577760220",
appId: "1:645577760220:web:d9bf23905a88421b1f4319",
measurementId: "G-6T0PKPP51B"

};

firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();

export { firestore };
