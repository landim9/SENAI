import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDef2VLoM1LjYZb6W5EEOqHRn_h3M5sRVA",
    authDomain: "biblioteca-a46e4.firebaseapp.com",
    projectId: "biblioteca-a46e4",
    storageBucket: "biblioteca-a46e4.appspot.com",
    messagingSenderId: "128006554786",
    appId: "1:128006554786:web:bc28160219883c6c9483fb"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = getAuth(app);

export { db, auth };