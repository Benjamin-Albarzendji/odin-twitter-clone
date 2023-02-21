import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import { auth } from './main.jsx';
import { loginChecker } from './utils/loginHandler';

function App() {
  const [login, setLogin] = useState(false);
  const [user, setUser] = useState(null);

  //To check if the user is logged in on load from the firebase auth via the loginChecker
  useEffect(() => {
    loginChecker(setLogin, setUser);
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
              <Home setLogin={setLogin} setUser={setUser} login={login} />
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
