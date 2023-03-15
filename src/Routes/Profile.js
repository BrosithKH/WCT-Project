
// import {Link} from "react-router-dom";

import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/Profile.css";
import Axios from "axios";
// import Post from "./Components/Profile/Post";


const Profile = () =>{

    const navigate= useNavigate();
    const handleClick = () =>{
        navigate('/postContent')
    }

    const homeClick = () =>{
      navigate('/')
  }
    
    const[Data, setData] = useState();
    const[DataPost, setDataPost] = useState();
    
    const getData= async () => {const {data} = await Axios.get('http://localhost:4000/getEdit',{withCredentials:true});setData(await data)};
    
    useEffect(()=>{
      getData();  
    },[]);
    return(
      
      <div class="container mt-5">
      <div class="row py-5 px-4 ">
          <div class="col-xl-4 col-md-6 col-sm-10 mx-auto home">
              <div class="bg-white shadow rounded overflow-hidden p-3">
                  <div class="px-4 pt-0 pb-4 bg-dark">
                      <div class="media align-items-end profile-header d-flex ">
                          <div class="circle profile ">
                              <img src={Data && Data.data.image[0]} width="100px" height="100" ></img>
                          </div>
                          <div class="media-body mb-5 text-white px-4">
                              <h4 class="mt-0 mb-0">{Data && Data.data.specialist}</h4>
                              <p class="small mb-4"> <i class="fa fa-map-marker mr-2"></i>Cambodia</p>
                          </div>
                      </div>
                      
                      
                  
                  </div>
      
                  <div class="bg-light p-4  d-flex justify-content-end text-center">
                      
                  </div>
                  <div class="p-4 d-flex justify-content-end">
                  <button  class="btn btn-primary" onClick={()=>homeClick()}>
                    
                    Home page
                </button>
                  <button  class="btn btn-primary" onClick={()=>handleClick()}>
                    
                      Post
                  </button>
                  </div>
      
                  <hr></hr>
      
                  <div className="container">
      
                  <div class="card mt-3">
                      <ul class="list-group list-group-flush">
                        <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                          <h6 class="mb-0">Your Name:</h6>
                          <span class="text-secondary">{Data && Data.data.specialist}</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                          <h6 class="mb-0">Profession </h6>
                          <span class="text-secondary">{Data && Data.data.profession}</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                          <h6 class="mb-0">Telegram:</h6>
                          <span class="text-secondary">{Data && Data.data.contact.telegram}</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                          <h6 class="mb-0">Gmail:</h6>
                          <span class="text-secondary">{Data && Data.data.email}</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                          <h6 class="mb-0">Line:</h6>
                          <span class="text-secondary">{Data && Data.data.contact.line}</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                          <h6 class="mb-0">Contact Number: </h6>
                          <span class="text-secondary">{Data && Data.data.phoneContact}</span>
                        </li>
                      </ul>
                    </div>
                  
      
                  
              </div>
      
              
      
             
                  
      
                  <hr></hr>    
                      
                      <div class="margin containter-md d-flex flex-wrap align-items-center justify-content-around mb-3 " style={{"margin-left":"0px"}}>
                          {/* <h5 class="mb-0">Recent photos</h5><a href="#" class="btn btn-link text-muted">Show all</a> */}
                      
                          {DataPost && DataPost.data.relatedWork.map(img => ( <div class="col-lg-6 mb-2 pr-lg-1"><img src={img} class="img-fluid rounded shadow-sm"/></div>))};
                         
                          
                      </div>
                  </div>
              </div>
          </div>
      </div>
      
    )
}
export default Profile;