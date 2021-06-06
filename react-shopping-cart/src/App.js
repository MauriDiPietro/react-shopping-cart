import React, {useState} from 'react';
import data from './data.json';
import Products from './components/Products'

function App() {
  const [products, setProducts] = useState (data.products);
  const [colors, setColors] = useState('');
  const [sort, setSort] = useState('')

  return (
    <div className="grid-container">  
      <header>
        <a href='/'>React Shopping Cart</a>
      </header>
      <main>
       <div className='content'>
          <div className='main'>
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
