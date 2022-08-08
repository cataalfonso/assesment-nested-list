
import {useSelector} from 'react-redux';
import { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom'

import List from './List'
import NewNode from './NewNode'
import { useGetNodeQuery} from '../../redux/api/node'


function InfiniteList(){
  const navigate = useNavigate();
  const {data: nodeList, error}= useGetNodeQuery();
  const [showNewNode, setShowNewNode]=useState(false);
  const [items, setItems]=useState([]);
  const token = useSelector((state) => state.user.userToken)
 
 useEffect(()=>{
  if (Date.now()> token.timestamp){
    sessionStorage.removeItem('access_token')
  }  
 },[])
 
  useEffect(()=>{
    if (!token.token ){
      console.log(token.token)
      navigate('/')
    }
 },[token])

 useEffect(()=>{
  if (token && nodeList?.length>0){
    setItems(nodeList.filter(item=>item.parentId===0))
  }
}, [nodeList])

  return(
  <div className="container">
    <h1 id="maiListTitle">Lista Infinita</h1>
    {(!items || items.length===0) && <span id="msgEmptyList">Esto se ve muy vacío, crea algunos items...</span>}
    {error && <span id="msgErrorApi">Error al consultar la lista, asegurate de estar logueado</span>}
    {items.length>0 && <List items={items}></List>}
    <button className="btn-category info" id="btnAddFirstLevelItems"onClick={()=>setShowNewNode(true)}> + categoría principal </button>
    {showNewNode && <NewNode parentId={0} OnClose={setShowNewNode}/>}
  </div>
  )
};

export default InfiniteList;
