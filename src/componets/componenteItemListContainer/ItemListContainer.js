import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {arregloProductos} from "../baseDatos/baseDatos/arregloProductos"
import { useEffect, useState,useParams } from "react";
import {useParams } from 'react-router-dom';
import {ItemList} from "../componenteItemList/ItemList"
import { Item } from '../componenteItem/Item';

export const ItemListContainer = () => {
    console.log (useParams());
    const {categoryId} = useParams ();
    const [productos,setProductos] = useState ([]);
//Funcion que retorna promesa//

    const promesa = new Promise((resolve, reject) => {
         setTimeout(() => { 
         resolve (arregloProductos) 
        },2000); 
        })

    useEffect (()=>{
        promesa.then((response)=> {
            if (categoryId){
                const productsFiltered = response.filter (elm=>elm.categoria === categoryId);
                setProductos (productsFiltered);
            } else {
                setProductos (response)
            }
        })
    },[categoriaId])
    console.log ("productos",productos);
    return(
        <div style={{backgroundcolor:"blue", display:"flex",justifyContent:"center",marginTop:"100px"}}>
            <p> item list container</p>
            <Itemlist items ={productos}/>
        </div >
    )
}
