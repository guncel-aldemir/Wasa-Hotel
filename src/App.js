import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "../src/pages/home/Home.jsx";
import About from './pages/about/About';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/hakkımızda" element={<About/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
