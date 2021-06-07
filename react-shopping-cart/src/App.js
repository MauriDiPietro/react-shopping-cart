import React, {useState} from 'react';
import data from './data.json';
import Products from './components/Products';
import Filter from './components/Filter'

function App() {
  const [products, setProducts] = useState (data.products);
  const [category, setCategory] = useState('');
 



const filterProducts = (event)=>{
  console.log(event.target.value)
if (event.target.value === ' ') {
setProducts(data.products);

   } else {
     setCategory(event.target.value);
     setProducts(data.products.filter((product) => product.title.includes(event.target.value)))
 console.log(products)
   }
}

  return (
    <div className="grid-container">  
      <header>
        <a href='/'>Tienda Online</a>
      </header>
      <main>
       <div className='content'>
          <div className='main'>
            <Filter count={products.length} category={category} filterProducts={filterProducts}  />
            <Products products={products} />
            {/* products es el state products, inicialmente se carga el data.json que dentro contiene el arreglo products */}
          </div>
          <div className='sidebar'>Cart Items</div>
       </div>
      </main>
      <footer>
        All right is reserved.
      </footer>
    </div>
  );
}

export default App;
