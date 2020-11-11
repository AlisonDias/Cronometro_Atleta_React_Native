import firebase from 'firebase';

const prodConfig = {
    apiKey: "AIzaSyAZIqEVwXeUcESPDUU8ih2l5__rE_aenKY",
    authDomain: "lacres-gtr.firebaseapp.com",
    databaseURL: "https://lacres-gtr.firebaseio.com",
    projectId: "lacres-gtr",
    storageBucket: "lacres-gtr.appspot.com",
    messagingSenderId: "652260085384",
    appId: "1:652260085384:web:f79340654c781dd438993d",
    measurementId: "G-82DGZVPF1K"
};

const devConfig = {
    apiKey: "AIzaSyAZIqEVwXeUcESPDUU8ih2l5__rE_aenKY",
    authDomain: "lacres-gtr.firebaseapp.com",
    databaseURL: "https://lacres-gtr.firebaseio.com",
    projectId: "lacres-gtr",
    storageBucket: "lacres-gtr.appspot.com",
    messagingSenderId: "652260085384",
    appId: "1:652260085384:web:f79340654c781dd438993d",
    measurementId: "G-82DGZVPF1K"
};

const config = process.env.NODE_ENV === 'production'
    ? prodConfig
    : devConfig;

export const firebaseImpl = firebase.initializeApp(config);
export const firebaseDatabase = firebase.database();
export const firebaseAuth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const facebookProvider = new firebase.auth.FacebookAuthProvider();