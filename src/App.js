import AboutUs from './AboutUs';
import './App.css';
import Footer from './Footer';
import Home from './Home';
import Navbar from './Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Reservation1 from './Reservation1';
import Reservation3 from './Reservation3';

function App() {
  return (
    <div className="App">
      <div className="container">
        <BrowserRouter>
          {/* <Navbar /> */}
          <Routes>
            <Route exact path='/home' element={<Home />}></Route>
            <Route exact path='/about' element={<AboutUs />} />
            <Route exact path='/reservation/1' element={<Reservation1 />}></Route>
            <Route exact path='/reservation/3' element={<Reservation3 />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
