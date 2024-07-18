import HelloName from "./components/HelloName"
import Weather from "./components/Weather"

import "./App.css"
import ProductList from "./components/ProductList"

function App() {

  return (
    <div className='main-container'>
      <div className="product-container">
        <ProductList title='Wireless Headphones' price={6} imgLink='https://m.media-amazon.com/images/I/61TXenWNoQL._AC_SX679_.jpg'> </ProductList>
        <ProductList title='Smartwatch' price={8} imgLink='https://m.media-amazon.com/images/I/61yZgFFL0iL._AC_SX679_.jpg'></ProductList>
        <ProductList title='Bluetooth Speaker' price={4} imgLink='https://m.media-amazon.com/images/I/61+sKi1viEL._AC_SX569_.jpg'></ProductList>
      </div>
    </div>
  );
}


export default App
