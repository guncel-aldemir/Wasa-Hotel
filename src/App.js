import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "../src/pages/home/Home.jsx";
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Accommodation from './components/accommodation/Accommodation';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/hakkımızda" element={<About/>} />
        <Route path="/iletişim" element={<Contact/>} />
        <Route path="/odalarımız" element={<Accommodation/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
