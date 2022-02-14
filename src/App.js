import { useEffect, useState } from 'react';
import './reset.css'
import './App.css';
import Cart from './Cart/cart';
import ProductList from './ProductList/productList';




function App() {
  const [prod, setProd] = useState([])
  const [sale, setSale] = useState([])

  function addCart(item){
    setSale([...sale, item])

  }


  function delCart(item){
    setSale( sale.filter((produto) => produto !== item))

  }
  


  useEffect(()=>{
    fetch('https://hamburgueria-kenzie-json-serve.herokuapp.com/products')
    .then((response)=> response.json())
    .then((response) => setProd(response))
  


  },[])



  return (

    <div className="App">
      <header className="App-header">
        <ProductList prod={prod} addCart={addCart} delCart={delCart}/>
        <Cart sale={sale} delCart={delCart}/>
       
        
      </header>
    </div>
  );
}

export default App;
