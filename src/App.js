
import { BrowserRouter,Routes,Route, Await } from "react-router-dom";
import HomePage from "./Routes/Home";
import Detail from "./Routes/Detail";
import Upload from "./Routes/Upload";
import React from 'react';
import { useState ,useEffect } from "react";
import Axios from "axios";
import { useRef } from 'react';
import About from "./Routes/About";
import Register from "./Routes/Register";
import Login from "./Routes/Login";
import Profile from "./Routes/Profile";
import ProfileEdit from "./Routes/ProfileEdit";
import Post from "./Routes/Post";
function App() {
  const [data,setdata]=  useState("");
  const [re,setre] = useState(false);
  const obj = useRef("");
  const dataSet = {
    dataT: data,
    saver : (data) => {obj.current= data; alert(JSON.stringify(obj.current));}
  }
 
 let count=0;
  useEffect(()=>{
    count++;
    //get the data from the server
     Axios.get("http://localhost:4000/getData").then((res)=>{setdata(res.data);setre(true);}).catch((err)=>console.log(err));
    console.log("counter :"+count+typeof  data);
  },[]);
  return (
      <div className="p-3">
          <BrowserRouter>
              <Routes>
              <Route path="/" element={<HomePage key={1} home={dataSet}/>}></Route>
                  <Route path="/detail" element={<Detail/>}></Route>
                  <Route path="/register" element={<Register/>}></Route>
                  <Route path="/upload" element={<Upload/>}></Route>
                  <Route path="/about" element={<About/>}></Route>
                  <Route path="/login" element={<Login/>}></Route>
                  <Route path="/profile" element={<Profile/>}></Route>
                  <Route path="/profileEdit" element={<ProfileEdit/>}></Route>
                  <Route path="/postContent" element={<Post/>}></Route>
              </Routes>
          </BrowserRouter>
      </div>
  );
}

export default App;