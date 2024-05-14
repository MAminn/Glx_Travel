import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home.jsx"
import Pricing from "./routes/Pricing.jsx";
import Training from "./routes/Training.jsx";
import Contact from "./routes/Contact.jsx"


function App() {
  return (
    <main>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pricing' element={<Pricing />} />
        <Route path='/training' element={<Training />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </main>
  );
}

export default App;
