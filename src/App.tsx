import React, { useEffect, useState } from 'react';
import { Product } from './components/Product'
// import { products } from './data/fakedata';
import axios, { AxiosError } from 'axios';
import { IProduct } from './models';

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

  const [products, setProducts] = useState<IProduct[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function fetchProducts (){
    try {
      setError('')
      setLoading(true)
      const response = await axios.get<IProduct[]>('https://fakestoreapi.com/products?limit=5')
      setProducts(response.data)
      setLoading(false)
    }
    catch (e : unknown){
      const error = e as AxiosError
      setLoading(false)
      setError(error.message)
    }
    
  }

  useEffect(() => {fetchProducts()}, [])

  return(
    <div className = "container mx-auto max-w-2xl pt-5">
      {loading && <p className='text-center'>Loading...</p>}
      {error && <p className='text-center text-red-600'>{error}</p>}
      {products.map(product => <Product product={product} key={product.id}/>)}
      
      {/* <Product product = {products[0]}/>
      <Product product = {products[1]}/> */}
    </div>
  )
}

export default App;