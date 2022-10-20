import logo from './logo.svg';
import './App.css';
import "./componets/componenteNavbar/NavBar"
import "./componets/componenteItemDetail/ItemDetail"
import { Navbar } from './componets/componenteNavbar/NavBar';
import {ItemListContainer} from "./componets/componenteItemListContainer/ItemListContainer"
import { ItemDetailContainer } from './componets/componenteDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() { 
  return (
    <BrowserRouter>
    <div className="App">
    <Navbar></Navbar>
    <ItemListContainer></ItemListContainer>
    <Routes>
    <Route path="/" element={<ItemListContainer/>}/>
    <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
    <Route path='/item/:id' element={<ItemListContainer/>}/>
    </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
