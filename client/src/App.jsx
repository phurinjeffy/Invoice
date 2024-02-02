import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Home from './pages/Home';
import Invoice from './pages/Invoice';
import Partner from './pages/Partner';

function App() {
  return (
    <div className='w-full h-full'>
      <Navbar />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/invoice" element={<Invoice />} />
          <Route path="/partner" element={<Partner />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
