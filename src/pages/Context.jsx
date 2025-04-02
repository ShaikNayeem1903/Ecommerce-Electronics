import React, { createContext,  useState } from 'react'
import { productsData } from './productsData'
export let dataContext=createContext()
function Context({children}) {
  const productTittles = [
    {
        id: 1,
        name: "All"
    },

    {
        id: 2,
        name: "Graphic Cards"
    },

    {
        id: 3,
        name: "Laptops"
    },

    {
        id: 4,
        name: "Moniters"
    },

    {
        id: 5,
        name: "Power Suppliers"
    },
  ];


   let filter=(cetegery)=>{
          if(cetegery==="All"){
              setCete(productsData)
          }
          else{
           
            let filtered=  productsData.filter((item)=>item.cetegery===cetegery)
           setCete(filtered)
           
          }
      }
  

    const [cate,setCete]=useState(productsData);
    const [input,setInput]=useState("");


   let data={
        cate,
        setCete,
        input,
        setInput,
        productTittles,
        filter,
    }
  return (
    <div>
      
      <dataContext.Provider value={data}>
        {children}

      </dataContext.Provider>
    </div>
  )
}

export default Context
