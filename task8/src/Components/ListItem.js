import React,{useState} from 'react'
import AddItem from './AddItem';
import DisplayItem from './DisplayItem';

function ListItem() {
    const[items,setItems]=useState([
        {
            id:1, name:'apple'
        },
        {
            id:2,name:"Banana"
        }
    ]

    )
    const additems=(newItems)=>{
        setItems((item)=>[...item,newItems]);

    }
  return (
    <div>
        <AddItem additems={additems}/>
        <DisplayItem items={items}/>
    </div>
  )
}

export default ListItem