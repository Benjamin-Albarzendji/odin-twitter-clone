/* eslint-disable no-unused-vars */
import { signInAnonymously, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../main.jsx';

// Anon login function
const anonLogin = () => {
  signInAnonymously(auth)
    .then((e) => {
      // Signed in..
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ...
    });
  return true;
};

// A simple login checker that sets the login state and the user variable
const loginChecker = (setLogin, setUser) => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setLogin(true);

      setUser(user);
    }
  });
};

export { anonLogin, loginChecker };
