import { useState } from "react";
import { Routes, Route, Link } from 'react-router-dom'

function Home() {
  const [count, setCount] = useState(0);
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white px-4">
      <div className="text-center max-w-2xl">

        <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
          Developers, <span className="text-indigo-400">Welcome</span> 
        </h1>

        <p className="text-lg md:text-xl text-gray-300 mb-4">
          to the <span className="font-semibold text-indigo-300">Software Department Website</span>
        </p>

        <button
          onClick={() => setCount(count + 1)}
          className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg transition text-white font-semibold"
        >
          You clicked {count} times.
        </button>

      </div>
    </div>
  )
}

function About() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black text-white">
      <div className="text-center">
        <h2 className="text-3xl font-bold">About</h2>
        <p className="mt-2 text-gray-300">This is the Software Department site.</p>
      </div>
    </div>
  )
}

function App() {
  return (
    <div>
      <nav className="bg-gray-900/60 backdrop-blur-md py-4 px-6 flex gap-4">
        <Link to="/" className="text-white font-semibold">Home</Link>
        <Link to="/about" className="text-gray-300 hover:text-white">About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
