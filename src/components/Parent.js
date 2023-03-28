 import React from 'react'
import { useState } from "react";


const Parent = () =>{

  let product = [{
    id:"001",
    name :"oneplus11",
    price : 56999,
    isPurchased: true},
    {
    id:"002",
    name : "Vivi Y100",
    price : 24999,
    isPurchased: false},
    {
    id:"003",
    name : "Redmi 10",
    price : 56999,
    isPurchased : true},
    {
    id:"004",
    name : "iphone 13",
    price : 62990,
    isPurchased : false},
    {
    id:"005",
    name : "Nokia",
    price : 12000,
    isPurchased : true},
    {
    id:"006",
    name : "Poco M4",
    price : 13999,
    isPurchased : true}];

  
  const [state,setState]=useState(product)

    let ltoh = [...product].sort((a,b)=>{
      return a.price-b.price;
    })
    let htol=[...ltoh].reverse();
  
    const whysorting=(alp)=>{
      var so=[...product].sort((a,b) => {
          var sad=a.name.toUpperCase()
          var sosad=b.name.toUpperCase()
          if(sad<sosad){return -1}
          if(sad>sosad){return 1}
          return 0;
          
   })
  {alp==='truee' ? setState(so):setState(so.reverse())}
     }
     let fil =()=>{
      let buy =[...product].filter(s=>s.quality===true)
      setState(buy)
     }
  return(
    <div>
      <button onClick={()=>whysorting("truee")}>Name apha order</button>
      <button onClick={()=>whysorting("aa")}>Name apha reverse</button>
      <button onClick={()=>setState(ltoh)}>price low to high</button>
      <button onClick={()=>setState(htol)}>price high to low</button>
      <button onClick={()=>fil()}>Quality</button>
      <button onClick={()=>setState([...product])}>All</button>
      {
        state.map((value,index)=>{
          return(
            <div key={index}>
              <h1>{value.name}</h1>
              <p>{value.price}</p>
              <h3>{value.quality}</h3>
            </div>
          )
        })
      }
    </div>
  )
}
export default Parent