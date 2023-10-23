import './css/index.css';
import AboutUs from './Talassa/AboutUs';
import Footer from './Footer';
import Home from './Talassa/Home';
import Navbar from './Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Reservation1 from './Talassa/Reservation1';
import Reservation3 from './Talassa/Reservation3';
import Reservation2 from './Talassa/Reservation2';
import Tes from './Tes';
import Auth from './Admin/Auth';
import Branch from './Admin/Branch';
import Login from './Admin/Login';

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
            {/* <Route exact path='/thank-you' element={<ThankYou />} /> */}

            <Route exact path='/login' element={<Login />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
