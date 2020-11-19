import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyAZIqEVwXeUcESPDUU8ih2l5__rE_aenKY",
    authDomain: "lacres-gtr.firebaseapp.com",
    databaseURL: "https://lacres-gtr.firebaseio.com",
    projectId: "lacres-gtr",
    storageBucket: "lacres-gtr.appspot.com",
    messagingSenderId: "652260085384",
    appId: "1:652260085384:web:f79340654c781dd438993d",
    measurementId: "G-82DGZVPF1K"
};

firebase.initializeApp(firebaseConfig);

export default firebase; 
