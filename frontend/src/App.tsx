import { Routes, Route} from 'react-router-dom'
import Navbar from "./components/Navbar";
import About  from './pages/About';
import { Home } from './pages/Home';
import { Footer } from './components/Footer';
import Resources from './pages/Resources';
import Activities from './pages/Activity';

function App() {
  return (
    <div>
    
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resources" element={<Resources/>} />
        <Route path="/activities" element={<Activities/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
