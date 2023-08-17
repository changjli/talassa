import './App.css';
import Footer from './Footer';
import Home from './Home';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Navbar />
        <Home />
        <Footer />
      </div>
    </div>
  );
}

export default App;
