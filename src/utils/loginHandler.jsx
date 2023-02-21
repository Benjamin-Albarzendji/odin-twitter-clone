/* eslint-disable no-unused-vars */
import { signInAnonymously, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../main.jsx';

// Anonymous login function
const anonLogin = (setLogin, setUser) => {
  // Signs in anonymously via Firebase
  signInAnonymously(auth)
    .then((e) => {
      // Checks against the Fiirebase Service and sets the login state and the user variable
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setLogin(true);
          setUser(user);
        }
      });
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
  return true;
};

// A simple login checker that sets the login state and the user variable
const loginChecker = (setLogin, setUser) => {
  // Checks against the Fiirebase Service
  onAuthStateChanged(auth, (user) => {
    // If user is logged in, set the login state to true and set the user variable
    if (user) {
      setLogin(true);
      setUser(user);
    }
  });
};

export { anonLogin, loginChecker };
