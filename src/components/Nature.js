import React,{useState} from 'react'
import Menu from './menuApi'
import MenuCard from './MenuCard'
import Navbar from './Navbar'
import Search from './Search'
import './Style.css'


const uniqueList = [
    ...new Set(
     Menu.map((curElem)=>{
return curElem.category;
})
)]

console.log(uniqueList)
const Nature = () => { 
    const [menuData, setMenuData] = useState(Menu);
    const [menuList , setMenuList] = useState(uniqueList);
   console.log(menuData);

const filterItem = (category)=>{
const updatedList = Menu.filter((curElem)=>{
return curElem.category===category;

});
setMenuData(updatedList);
}

    return (
        <>
        <Search  />
      <Navbar filterItem={filterItem} menuList={menuList}/>
        <MenuCard menuData={menuData} />
        </>
    )
}

export default Nature
