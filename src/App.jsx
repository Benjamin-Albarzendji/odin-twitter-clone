import { useState, useEffect, useLayoutEffect } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import { loginChecker } from './utils/Login_Handler';
import tweetGetter from './utils/tweetGetter';

function App() {
  const [login, setLogin] = useState(false);
  const [user, setUser] = useState(null);
  const [tweets, setTweets] = useState(null);

  //To check if the user is logged in on load from the firebase auth via the loginChecker
  useEffect(() => {
    async function fetchData() {
      await loginChecker(setLogin, setUser);
      await setTweets(tweetGetter());
    }
    fetchData();
  }, []);
  console.log(user);

  return (
    <BrowserRouter>
      <div className="App flex">
        <Navbar
          user={user}
          login={login}
          setLogin={setLogin}
          setUser={setUser}
        ></Navbar>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                setLogin={setLogin}
                setUser={setUser}
                login={login}
                user={user}
                tweets={tweets}
              />
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
