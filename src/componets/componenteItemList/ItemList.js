import { useEffect } from "react"
import { Item } from "../componenteItem/Item";

export const ItemList = ({items})=>{
    console.log(items)

   return(
       <div>
           <div style={{color:"black"}}>item list</div>
           {
              items.map(producto=>(
                  <Item key={producto.id} item= {producto}/>
              ))
            }
       </div>
    )
}
 