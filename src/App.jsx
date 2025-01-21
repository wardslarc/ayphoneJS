import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import React, { useState } from "react";


const App = () => {
  const [count, setCount] = useState(0)

  return (
    <main className="bg-black">
      <Navbar /> 
      <Hero />
      <Highlights />
    </main>
  )
}

export default App
