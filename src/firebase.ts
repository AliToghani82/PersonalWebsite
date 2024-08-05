import { initializeApp, getApps, getApp } from 'firebase/app';
import 'firebase/functions';

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyAM6KTpcTpiVU8CA0oK3D2shb-3iCl7CEw",
  authDomain: "website2-c6368.firebaseapp.com",
  databaseURL: "https://website2-c6368-default-rtdb.firebaseio.com",
  projectId: "website2-c6368",
  storageBucket: "website2-c6368.appspot.com",
  messagingSenderId: "926277492699",
  appId: "1:926277492699:web:a97357bd1c2aef6446d1fe",
  measurementId: "G-7W4MD36Z9W"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export default app;
