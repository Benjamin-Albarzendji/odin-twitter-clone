import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getDatabase, ref, set } from 'firebase/database';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCqwbczzOmkFf3HGvgrz724tF1w_3HZN-0',
  authDomain: 'twitter-clone-69ca8.firebaseapp.com',
  projectId: 'twitter-clone-69ca8',
  storageBucket: 'twitter-clone-69ca8.appspot.com',
  messagingSenderId: '1066993584447',
  appId: '1:1066993584447:web:f2057b8fd1283673b26b8a',
  databaseURL: 'https://twitter-clone-69ca8-default-rtdb.firebaseio.com/',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();

// Initialize Realtime Database and get a reference to the service
const database = getDatabase(firebaseApp);

// Exporting the firebase services
export { auth, provider, database };

// React App

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
