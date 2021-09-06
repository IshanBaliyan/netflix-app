import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Do not uncomment following as it was only used for pushing data into firebase
// import { seedDatabase } from '../seed';

// we need to somehow seed the database

const config = {
    apiKey: "AIzaSyCovuHA9AykLEh550-N5LwrHetgtFU81HU",
    authDomain: "netflix-da27f.firebaseapp.com",
    projectId: "netflix-da27f",
    storageBucket: "netflix-da27f.appspot.com",
    messagingSenderId: "597860479077",
    appId: "1:597860479077:web:7cadac7d915dfe15d0968c"
};

const firebase = Firebase.initializeApp(config);

// seedDatabase(firebase);

export { firebase };