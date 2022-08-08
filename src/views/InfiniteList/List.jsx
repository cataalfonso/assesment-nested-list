import { useEffect, useState } from "react";
import ListItem from "./ListItem";

function List({items}) {
    const [listArray, setListArray]=useState()  
  
  useEffect(()=>{
    if (items.length > 0) {
        setListArray(items.map((item) => {
          return <ListItem key={item.id} parent={item} itemId={item.id}></ListItem>;
        }));
      }
  },[])  
 
  
  return(
  <div>
  <ul className="no-bullets">{listArray}</ul>
  </div> )
}

export default List;
