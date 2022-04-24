import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../src/styles/globals.css'
import Navbar from './Components/Navbar/Navbar';
import Index from './pages/Index';
import Footer from './Components/Footer';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Index />}/>
    </Routes>
    <Footer />
    </BrowserRouter>
  );
}

export default App;
