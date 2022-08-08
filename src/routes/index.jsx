import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from '../views/Home'
import InfiniteList from "../views/InfiniteList";

function RouteComponent(){
  return(
  <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home />} />
      <Route path="/list" element={<InfiniteList />} />
    </Routes>
  </BrowserRouter>
  )
};

export default RouteComponent;
