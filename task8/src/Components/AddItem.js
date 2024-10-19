import React,{useState} from 'react'

function AddItem({additems}) {
    const[ItemName,setItemName]=useState('')
    const handleAddItem=(e)=>{
        e.preventDefault();
        if(ItemName){
            additems({id:Date.now(),name:ItemName});
            setItemName('')
        }

    }
  return (
    <div>
        <label htmlFor="item">Enter Item Name</label>
        <input  value={ItemName} onChange={(e)=>setItemName(e.target.value)} type="text" />
        <button onClick={handleAddItem}>Add Item</button>
    </div>
  )
}

export default AddItem