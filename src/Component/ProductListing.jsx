import React from "react";

export default function Display_item(){
  const[item,Disitem]=React.useState([])
React.useEffect(()=>{
    fetch(`http://localhost:3001/item`)
    .then((res)=>res.json())
    .then((res)=>Disitem(res))
    .catch((err)=>console.log(err))
},[])
   

console.log(item)
return (
<div>
    {item.map((e)=>(
        
      <><h3>title:{e.title}</h3>
        <h3>price:{e.price}</h3>
        <h3>category:{e.category}</h3>
        <h3>gander:{e.gander}</h3>
        <img src={e.image} alt="" />
        </>
        ))}
</div>
)

}