import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCqwbczzOmkFf3HGvgrz724tF1w_3HZN-0',
  authDomain: 'twitter-clone-69ca8.firebaseapp.com',
  projectId: 'twitter-clone-69ca8',
  storageBucket: 'twitter-clone-69ca8.appspot.com',
  messagingSenderId: '1066993584447',
  appId: '1:1066993584447:web:f2057b8fd1283673b26b8a',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(firebaseApp);

export { auth };

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
