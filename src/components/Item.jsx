import axios from "axios";
const Item = ({ item, API, setItems}) => {
    console.log(item)
    // Render a single item
    // Add a Delete and Edit button
    
    const handleDelete = async() =>{
      
            try{
                await axios.delete(`${API}${item.id}`)
                console.log("Deleted Successfully!")
                setItems((prevItems) => prevItems.filter((i) => i.id !== item.id));
            }
            catch(err){
                console.log(err)
            }
   
        
    }

    return(
        <>
        <h2>{item.name} <br/> {item.status}</h2>
        <button>Edit</button>
        <button  onClick={handleDelete}>Delete</button>
        </>
    )
};

export default Item;
