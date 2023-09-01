import './App.css';
import './css/index.css';
import AboutUs from './AboutUs';
import Footer from './Footer';
import Home from './Home';
import Navbar from './Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Reservation1 from './Reservation1';
import Reservation3 from './Reservation3';
import Reservation2 from './Reservation2';
import Tes from './Tes';
import ThankYou from './ThankYou';

function App() {
  return (
    <div className="App">
      <div className="container">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route exact path='/home' element={<Home />}></Route>
            <Route exact path='/about' element={<AboutUs />} />
            <Route exact path='/reservation/1' element={<Reservation1 />}></Route>
            <Route exact path='/reservation/2' element={<Reservation2 />} />
            <Route exact path='/reservation/3' element={<Reservation3 />} />
            <Route exact path='/thank-you' element={<ThankYou />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
