import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Card from './pages/card.jsx'
import './styles/global.css'
import { ThemeProvider } from "./components/Theme.jsx";
import Footer from "./components/footer.jsx";
import Abouts from "./pages/about.jsx";
import Contacts from "./pages/contact.jsx"

function Home() {
  
  return (
  <div>
    <br></br>
      <ThemeProvider>
      <Card />
    </ThemeProvider> <br></br>
 
  </div>
  );
}


function About() {
  return (
    <div>
  <Abouts />
  </div>
  );
}

function Contact() {
  return (
    <div>
      <Contacts />
    </div>
  );
}


function App() {
  return (
    <BrowserRouter>
      <nav className='nav'>
        {/* Navigation links */}
        <h2 className='title'>📄 Task Manager</h2>
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
        <Link to="/contact">Contact</Link>

      </nav>

      <Routes>
        {/* Route definitions */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>


    {/*
    <div className='but'>
      <Button variant="primary">Save</Button>
      <Button variant="secondary">Cancel</Button>
      <Button variant="danger">Delete</Button>
    </div>
    */}

      <Footer />
      
    </BrowserRouter>
  );
}

export default App;
