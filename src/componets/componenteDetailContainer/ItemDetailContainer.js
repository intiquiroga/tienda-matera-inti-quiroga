import {useState,useEffect} from "react";
import { arregloProductos } from "../baseDatos/baseDatos/arregloProductos";
import { ItemDetail } from "../componenteItemDetail/ItemDetail";
import { ItemList } from "../componenteItemList/ItemList";
import { ItemListContainer } from "../componenteItemListContainer/ItemListContainer";
import { Item } from "../componenteItem/Item";

export const ItemDetailContainer = ()=> {


    const promesa = new Promise ((resolve,reject)=>{
        setTimeout (()=> {
            resolve (arregloProductos);
      },2000);
    })
            
    useEffect (()=> {
        const getProducto = async () => {
            const productos = await promesa ;
            console.log ('productos' , productos);
            const producto = productos.find (elemento =>elemento.id === parseInt (id));
            console.log("producto",producto)
            setItemProduct (producto);
        }
        getProducto ();
    },[id])
  
    return (
        <div className="item-detail-container">
            <p style={{width:"100%"}}>item datail Container</p>
            <ItemDetail item={itemProduct}/>
        </div>
    )

}