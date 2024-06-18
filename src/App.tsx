import React from 'react';
import { Product } from './components/Product'
import { products } from './data/fakedata';

function App() {
  // return (
  //   <h1>Hello React</h1>
  // )
  // ##############
  // const [count, setCount] = useState(0)
  // return React.createElement('div', {className : 'container'}, 
  //   React.createElement('h1', {className: 'font-bold', key:0}, `Test JSX ${count}`),
  //   React.createElement('button', {className : 'py-2, px-4 border', key:1, onClick : () => setCount(count + 1)}, 'click me')
  // )

  return(
    <div className = "container mx-auto max-w-2xl pt-5">
      {products.map(product => <Product product={product} key={product.id}/>)}
      
      {/* <Product product = {products[0]}/>
      <Product product = {products[1]}/> */}
    </div>
  )
}

export default App;