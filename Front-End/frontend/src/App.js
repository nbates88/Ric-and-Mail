import './App.css';
import ProductPage from './components/ProductPage';
// import Form from './components/Form';
import ProductPage from './places/shop';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import home from './places/home'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
     <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    {/* <Form/> */}
<ProductPage/>
    

     
      <Navbar />
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<home/>}></Route>
            <Route exact path="/shop"></Route>
            <Route exact path="/aboutUs"></Route>
            <Route exact path="/contactUs"></Route>
          </Routes>
        </BrowserRouter>

    </div>
  );
}

export default App;
