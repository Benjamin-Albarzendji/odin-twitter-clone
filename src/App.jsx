import { useState } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar></Navbar>
        <Routes>
        {/* <Route path="/" element={<Home />} /> */}

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
