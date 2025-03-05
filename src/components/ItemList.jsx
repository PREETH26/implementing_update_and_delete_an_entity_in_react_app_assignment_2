import React from "react";
import Item from "./Item";
import { useEffect } from "react";

const ItemList = ({ items,API,setItems }) => {
    // your code here
    if(!items){
        return <h1>Loading</h1>
    }

    

    console.log(items)
    return (
        <>  
            
            {items.map((item) => (
                <Item key={item.id} item={item} API={API} setItems={setItems}/>
            ))}
        </>
    );
};

export default ItemList;
