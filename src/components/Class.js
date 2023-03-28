import React,{Component}from "react"
let mobiles = [{
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

    class stateclass extends React.Component{
        constructor(){
            super();
               let status =mobiles;
               this.state={
                status
               }
        }
        render(){

            let declare =this.state.status
           
            let bb = ()=>{
                let hh = [...mobiles].filter(value=>
                    value.isPurchased===true
                )
                this.setState({status:hh})
            }
          let ltoh=(pri)=>{
             let ltoh1=[...mobiles].sort((a,b)=>{
                return a.price-b.price
             })
             pri=="ltoh"?this.setState({status:ltoh1}):this.setState({status:ltoh1.reverse()});
          }
          const alpha=(alp)=>{
            var so=[...mobiles].sort((a,b) => {
                var sad=a.name.toUpperCase()
                var sosad=b.name.toUpperCase()
                if(sad<sosad){return -1}
                if(sad>sosad){return 1}
                return 0;
                
         })
        {alp==='truee' ? this.setState({status:so}):this.setState({status:so.reverse()})}
           }
          
            return(
               
                   <div>
                    <button onClick={()=>alpha("truee")}>alpha</button> 
                    <button onClick={()=>alpha("falsees")}>alphareverse</button> 
                    <button onClick={()=>ltoh("ltoh")}>Price low to high</button> 
                    <button onClick={()=>ltoh("loij")}>Price height to low</button> 
                    <button onClick={()=>bb()}>Quality</button>
                    {
                        declare.map((value,index)=>{
                            return(
                                <div key={index}>
                                    <h1>{value.name}</h1>
                                    <p>{value.price}</p>
                                    <p>{value.isPurchased}</p>
                                </div>
                            )
                        })
                    }
                </div>
            )
        }
    }
    export default stateclass