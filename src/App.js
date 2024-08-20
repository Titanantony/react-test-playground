import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom';
import './App.css';

//pages

import Home from './pages/Home';
import About from './pages/About';


function App() {
  return (
   <BrowserRouter>
    <header>
      <h1>Mauristo Router</h1>
      <Link to="/">Home</Link>
      <NavLink to="about">About</NavLink>

    </header>
    <main>
      <Routes>
        <Route index element={<Home />}/>
        <Route path="about" element={<About />}/>
        {/* <Route path="" element={<Home />}/> */}
        
        <Route/>
      </Routes>
    </main>
   </BrowserRouter>
  );
}

export default App;
