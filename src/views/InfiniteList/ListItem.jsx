
import {useSelector} from 'react-redux';
import {useState, useEffect} from 'react'

import { useGetNodeQuery } from '../../redux/api/node'
import List from './List'
import NewNode from './NewNode'

function ListItem({parent, itemId}){
  const {data: nodeList}= useGetNodeQuery();
  const [childNodes, setChildNodes]=useState([]);
  const [visible, setVisible]=useState(true);
  const [showNewNode, setShowNewNode]=useState(false);
  const token = useSelector((state) => state.user.userToken.token);

  useEffect(()=>{
    if (token && nodeList.length>0){
      setChildNodes(nodeList.filter(item=>item.parentId===parent.id))
    }
  }, [nodeList])

  const listItems = () => {
    return (
      <>
        {childNodes.length > 0 && <List items={childNodes}></List>}
      </>
    )
  }

  const toogleListView=()=>{
    setVisible(!visible)
  }

  return (
    <li id={itemId}>
      <div className="parent-node">
      {childNodes.length>0 && <button className="btn-action default" id={`btnToogle-${itemId}`} onClick={toogleListView}>{visible? '-':'+' }</button>}
      <h4>{parent.name}</h4>
      {childNodes.length===0 && <button className="btn-category info" id={`btnAddChilds-${itemId}`} onClick={()=>setShowNewNode(true)}> + sublista </button>}
      {showNewNode && childNodes.length===0 && <NewNode parentId={itemId} OnClose={setShowNewNode}/>}
      </div>
      {visible &&
      <div>      
      {listItems()}
      {childNodes.length>0 && <button className="btn-category info" id={`btnAddSiblings-${itemId}`} onClick={()=>setShowNewNode(true)}> + categoría a la lista {parent.name} </button>}
      {showNewNode && childNodes.length>0 && <NewNode parentId={parent.id} OnClose={setShowNewNode}/>}
      </div>}
    </li>
  );
}

  export default ListItem;