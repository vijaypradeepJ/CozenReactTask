import React from 'react'

function DisplayItem({items}) {
   
  return (
    <div>
        {items.map((item)=>(
            <h3>{item.name}</h3>
        ))}
    </div>
  )
}

export default DisplayItem