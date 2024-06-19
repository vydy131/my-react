import {Route,  Routes } from "react-router-dom";
import { ProductsPage } from "./pages/ProductsPage";
import { AboutPage } from "./pages/AboutPage";


function App() {

  <Routes>
    <Route path="/" element={<ProductsPage/>}/>
    <Route path="/about" element={<AboutPage/>}/>
  </Routes>
  
}

export default App;