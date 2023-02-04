
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
     Axios.get("http://143.198.205.127:4000/getData").then((res)=>{setdata(res.data);setre(true);}).catch((err)=>console.log(err));
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



// {/* <Navbar collapseOnSelect expand="sm" bg="light" variant="light" >
// <Container>
//   <Navbar.Brand href="#home">
//   <img src={logo} className='img-fluid shadow-4'  width="30" height="30" />
//   <strong className='p-2'>KHServices</strong>
//   </Navbar.Brand>
//     {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
//     <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//     <Navbar.Collapse id="responsive-navbar-nav">
//     <Nav className="me-auto"></Nav>
//       <Nav>
//         <Nav.Link href="/">Home</Nav.Link>
//         <Nav.Link href="/detail">Detail</Nav.Link>
//         <Nav.Link href="/upload">Upload</Nav.Link>
//         <Nav.Link href="/login" className='bg-primary text-light text-center rounded'>Log in</Nav.Link>
//         <Outlet/>
//       </Nav>
//     </Navbar.Collapse>
// </Container>
// </Navbar>

// <Container>
//   <div className='w-100 h-100 position-relative outline overflow-hidden'>
//   <img src={backgroundRed} className='img-fluid shadow-4 w-70 h-70 outline'   />
//   <img src={brandAbessador} className='builder-index img-fluid shadow-4 position-absolute start-0 mt-5'   />
//   <img src={coco} className='img-fluid shadow-4  left-start'   />
//   <svg className='position-absolute bottom-0 end-0 put-index' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
//    <path className='wave' fill="white" fill-opacity="1" d="M0,0L34.3,0C68.6,0,137,0,206,5.3C274.3,11,343,21,411,37.3C480,53,549,75,617,101.3C685.7,128,754,160,823,186.7C891.4,213,960,235,1029,245.3C1097.1,256,1166,256,1234,224C1302.9,192,1371,128,1406,96L1440,64L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path>
//   </svg>
//    {/* content show to the user */}
//    <Container>
//     <div className='position-absolute top-text start-50 '>
//       <h1 className='text-light text-lg header-content'>Welcome to us</h1>
//       <p  className='text-light content-descript'>This service provide the basic services you are seeking for.<br/><strong>Please engage with us now !</strong></p>
//     </div>
//    </Container>
//    <img src={multi} className='img-fluid shadow-4 w-70 h-70 position-absolute multiLogo '   />
//    <a className='position-absolute readMore' href=''><i class="fa fa-book p-1" aria-hidden="true"></i> Read more</a>
//    <div className='position-absolute joinUs'>
//         <a  href=''> <i class="fa fa-long-arrow-right" aria-hidden="true"></i>Join us</a>
//    </div>
//   </div>
// </Container>
// {/* section two list categories of services */}
// <Container>
// <section>
// <h2 className='ml-3 text-sm'><i class="fa fa-cogs" aria-hidden="true"></i> Services</h2>
// <hr/>
// <container>
// <div className='filter-control'>
// <Form.Select size="sm" className='m-2'>
//   <option>Filter services:</option>
//   <option> Appliances </option>
//   <option> Building </option>
//   <option> Plumber</option>
//   <option> technical computer</option>
//   <option> Home appliance</option>
//   <option> Machanic</option>
//   <option> Architect</option>
// </Form.Select>
// <div className='sub-filter-control'>
// <Form.Control
//         type="search"
//         placeholder="Region.."
//         className="me-2 m-2"
//         aria-label="Search"
//       />
//       <button className='btn btn-primary m-2 filter-btn'><i class="fa fa-filter" aria-hidden="true"></i></button>
// </div>
// </div>
// </container>

// <Container className='mt-3'>

//   {/* call product component */}

//   {data.map((data)=>(<Product service={data}/>))}
  
  

// </Container>
// </section>
// </Container>
// {/* end of list categories */}

// {/* start of footer section */}
// <Container className='mt-4'>
// <footer className=" bg-light text-center text-lg-start ">
// <div className=" footer-customize ">
//     <div>
//         <h3>Services partner</h3>
//         <div>
//           <i class="fa fa-telegram" aria-hidden="true"></i> +855 10234598
//         </div>
//         <div>
//           <i class="fa fa-envelope" aria-hidden="true"></i>  Workshop@123gmail.com
//         </div>
//         <div>
//         <i class="fa fa-linkedin-square" aria-hidden="true"></i> +855 10234598
//         </div>
//     </div>
//     <div>
//         <h3>Contact us</h3>
//         <div>
//           <i class="fa fa-telegram" aria-hidden="true"></i> +855 10234598
//         </div>
//         <div>
//           <i class="fa fa-envelope" aria-hidden="true"></i>  Workshop@123gmail.com
//         </div>
//         <div>
//         <i class="fa fa-linkedin-square" aria-hidden="true"></i> +855 10234598
//         </div>
//     </div>
// </div>
// <div className="text-center p-3 footer-override" >
//   © 2020 Copyright:
//   <a className=" footer-override-link" href=""> Interprise.com</a>
// </div>

// </footer>
// </Container>
// <div className='redirector position-fixed' id="scrollNav" >
// <a href="#"><i class="fa fa-angle-double-up" aria-hidden="true"></i></a>

// </div>
// end of the footer section */}
