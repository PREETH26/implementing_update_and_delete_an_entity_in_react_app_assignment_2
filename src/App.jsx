import { useEffect, useState } from "react";
import axios from 'axios'
import ItemList from "./components/ItemList";

// use the following link to get the data
// `/doors` will give you all the doors.
const API_URI = `http://${import.meta.env.VITE_API_URI}/doors/`;

function App() {
  // Get the existing item from the server
  const [items, setItems] = useState();
  
  useEffect(()=>{
    const fetch = async()=>{
      try{
        const data = await axios.get(API_URI)
        setItems(data.data)
      }
      catch(err){
        console.log(err)
      }
    }
    fetch()
  },[])

  console.log(items)
  // pass the item to UpdateItem as a prop

  return <ItemList items={items} API={API_URI}  setItems={setItems}/>;

}

export default App;
