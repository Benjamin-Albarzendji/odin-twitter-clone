import { useState } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <div className="App flex">
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
