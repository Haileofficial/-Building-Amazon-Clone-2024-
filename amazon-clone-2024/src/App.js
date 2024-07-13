import './App.css';
import Carousel from './Components/Carousel/Carousel';
import Category from './Components/Catagory/Catagory';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import LowerHeader from './Components/Header/LowerHeader';
import Product from './Components/Product/Product';
function App() {
  return (
    <div className="App">
      <Header/>
      <LowerHeader/>
      <Carousel/>
      <Category/>
      <Product/>
      <Footer/>
    </div>
  );
}

export default App;
