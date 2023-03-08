import { useState, useEffect, useLayoutEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { loginChecker } from './utils/Login_Handler';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Explore from './components/Explore';
import Notifications from './components/Notifications';
import Messages from './components/Messages';
import Bookmarks from './components/Bookmarks';
import Lists from './components/Lists';
import More from './components/More';
import Profile from './components/Profile';
import tweetGetter from './utils/TweetGetter';

function App() {
  const [login, setLogin] = useState(false);
  const [user, setUser] = useState(null);
  const [tweets, setTweets] = useState(null);

  //To check if the user is logged in on load from the firebase auth via the loginChecker & tweetGetter functions
  useLayoutEffect(() => {
    async function fetchData() {
      // Checks the login state and sets the user variable
      await loginChecker(setLogin, setUser);
      // Gets the tweets from the database
      const getTweets = await tweetGetter();
      // Sets the tweets variable
      setTweets(getTweets);
    }
    fetchData();
  }, []);

  console.log(user);
  console.log(tweets);

  return (
    <BrowserRouter>
      <div className="App flex">
        {/* Navbar */}
        <Navbar
          user={user}
          login={login}
          setLogin={setLogin}
          setUser={setUser}
        ></Navbar>
        {/* Routes */}
        <Routes>
          {/* Home Route */}
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
          <Route path="/explore" element={<Explore />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/bookmarks" element={<Bookmarks />} />
          <Route path="/lists" element={<Lists />} />
          <Route path="/more" element={<More />} />
          <Route
            path="/profile/:id"
            element={<Profile user={user} tweets={tweets} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
