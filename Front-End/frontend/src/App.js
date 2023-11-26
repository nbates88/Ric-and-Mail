
import './App.css';
import ProductPage from './components/ProductPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';

function App() {
  return (
    <div className="App">
     
      <Navbar />
      <Hero/>
      <ProductPage />
      <Footer/>
    </div>
  );
}

export default App;
