/* eslint-disable no-unused-vars */
import {
  signInAnonymously,
  onAuthStateChanged,
  signInWithPopup,
} from 'firebase/auth';
import { auth, provider } from '../main.jsx';

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
const loginChecker = async (setLogin, setUser) => {
  // Checks against the Fiirebase Service
  await onAuthStateChanged(auth, async (user) => {
    // If user is logged in, set the login state to true and set the user variable
    if (user) {
      await setLogin(true);
      await setUser(user);
    }
  });
};

// Google login function
const loginWithGoogle = (setLogin, setUser) => {
  // Signs in with Google via Firebase
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const { user } = result;

      setLogin(true);
      setUser(user);
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
    });
};

export { anonLogin, loginChecker, loginWithGoogle };
