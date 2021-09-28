import React,{useState} from 'react'
import Menu from './menuApi'
const Search = () => {
    const [filteredData, setFilteredData] = useState([]);
    const searchFilter = (event)=>{
        const searchWord = event.target.value
        const newFilter = Menu.filter((value)=>{
            return value.category.includes(searchWord);
        });
        if(searchWord==""){
            setFilteredData([]);
        }else{
            setFilteredData(newFilter);
        }
    }
           return (
        <div className="search ">
            <input type="text" className="searchbar" 
            onChange ={searchFilter}
            placeholder="Search" />
             <section className="main-card--cointainer">
            {

                filteredData.map((value,key)=>{
                    return    <div className="card-container" key={value.id} >
                <div className="card ">
                  <div className="card-body">
                  <img src={value.image} alt="images" className="card-media" /> 
                  </div>    
                </div>
              </div>
                })
                
            }
            </section>
        </div>
    )
}

export default Search
