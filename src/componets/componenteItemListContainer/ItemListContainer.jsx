import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useEffect } from "react";

import { useEffect } from "react";

//Funcion que retorna promesa//
const obteberProductos =() => {

return new Promise((resolve, reject) => {
         setTimeout(() => { 
         resolve (productos) 
        },2000); 
        });

useEffect(()=> {
    obtenerProductos.then ((response)=> console.log (response))
},[])

const ItemListContainer = () => {
    return(
 
        <div style={{backgroundcolor:"blue", display:"flex",justifyContent:"center",marginTop:"100px"}}>
            <p> item list container</p>
            <Itemlist items ={productos}/>
        </div >
    )
}
}