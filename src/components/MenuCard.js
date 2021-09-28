import React from 'react'
import './Style.css'
const MenuCard = ({menuData}) => {
  //  console.log(menuData)
    return (
    <>
    <section className="main-card--cointainer">
    {
        menuData.map((curElem)=>{
            const {id, category, image} = curElem; 
         return(
             <>
            <div className="card-container" key={id} >
                <div className="card ">
                  <div className="card-body">
                  <img src={image} alt="images" className="card-media" /> 
                  </div>    
                </div>
              </div>
        
</>
         )
        })
    }
    </section>
          </>
    )
}

export default MenuCard
