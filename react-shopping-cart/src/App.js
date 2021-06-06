import React, {useState} from 'react';
import data from './data.json';

function App() {
  const [products, setProducts] = useState ([data.products]);
  const [colors, setColors] = useState('');
  const [sort, setSort] = useState('')

  return (
    <div className="grid-container">  
      <header>
        <a href='/'>React Shopping Cart</a>
      </header>
      <main>
        Product List
      </main>
      <footer>
        All right is reserved.
      </footer>
    </div>
  );
}

export default App;
