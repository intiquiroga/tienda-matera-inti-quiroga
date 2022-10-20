import {link} from "react-router-dom";
export const Item= ({item})=> {
    return (
        <div className="tarjeta-producto">
            <img src="" alt={item.title} />
            <h4>{item.title}</h4>
            <p> </p>
            <button className="boton-ver"></button>

        </div>
    )
}