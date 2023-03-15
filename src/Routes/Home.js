import react from "react";
import { useState,useEffect } from "react";
import Container from 'react-bootstrap/Container';
import { Nav, Row,Col,Card ,Button} from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import logo from  '../assets/logo.png';
import backgroundRed from '../assets/bg.png';
import coco from '../assets/coco.png';
import brandAbessador from '../assets/brandAbessador.png';
import "../assets/app.css";
import multi from '../assets/multi.png';
import { Form } from 'react-bootstrap';
import { Outlet,Link } from 'react-router-dom';
import Product from '../FrontPageComponents/Product';
import data from "../Center.json";
import Axios from "axios";

const HomePage = (props) => {
   const [data,setdata] = useState([]);
   const [sessionUser,setsessionUser] = useState();
   const [search,setSearch] = useState(null);
   const [filter,setFilter] = useState(null);
   const [matcher,setmatcher]= useState([]);
   let Data=[];
   let matching=[];
   let cateTmp;
   //let matcher=[];
   useEffect(()=> {
    
    // to get data the profile data 
    Axios.get('http://localhost:4000/getProfile',{withCredentials:true}).then((res)=>{
    setsessionUser(res.data.data.email);  
    console.log("sss",res);
    }).catch(err =>console.log(err));
    setmatcher([]);
     // filter the match post
     //alert(search)
     
     Data.map(obj=>{obj.data.map(obj2=>{
      
        //console.log(JSON.stringify(obj2))
        if(obj2.category===search && (filter===null || filter==="")){
           // check the value input from filter 

               console.log(obj)
               setmatcher([obj]);
               cateTmp=obj;
               
                //alert("alerted");
        }else if(obj2.location===filter && search===null ){
              //alert()
              matching=[];
              matching.push(obj2);
              setmatcher([{
                category : obj.category,
                data : matching
              }])
              console.log(obj2)
              
        }else if(obj2.location===filter && search===obj2.category){
          matching=[];
          matching.push(obj2);
          setmatcher([{
            category : obj.category,
            data : matching
          }])
          console.log(obj)
          console.log(obj2)
        }else if(obj2.location==="" && search===obj2.category){
          //alert()
          setmatcher([obj]);
          
      }
     })})
     console.log(JSON.stringify(matcher.length))
},[filter,search]);
    const products = matcher.length ? matcher : Data;
    console.log("matcher :",matcher);
    console.log("D :",Data);
    console.log("product :",products);
    return(
        <div className="container-fluid modify-margin"> 
        <div className="d-none">{props.home.dataT.data && props.home.dataT.data.map((d)=> Data.push(d))}</div>
             <Navbar collapseOnSelect expand="sm"  bg="light" variant="light" >
                <Container>
                <Navbar.Brand href="#home">
                <img src={logo} className='img-fluid shadow-4'  width="30" height="30" />
                <strong className='p-2'> រោងជាង</strong>
                </Navbar.Brand>
                  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                  <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="me-auto"></Nav>
                    <Nav>
                      <Nav.Link href="/">Home</Nav.Link>
                      <Nav.Link href="/about">About us</Nav.Link>
                      {/* <Nav.Link href="/upload">Upload</Nav.Link> */}
                      {sessionUser ? (<a href="/profile">Image</a>) : (<><Nav.Link href="/login">Login</Nav.Link><Nav.Link href="/register" className='bg-primary text-light text-center rounded'>Register</Nav.Link></>)}      
                      <Outlet/>
                    </Nav>
                  </Navbar.Collapse>
              </Container>
              </Navbar>

              <Container>
                <div className='w-100 h-100 position-relative outline overflow-hidden'>
                <img src={backgroundRed} className='img-fluid shadow-4 w-70 h-70 outline'   />
                <img src={brandAbessador} className='builder-index img-fluid shadow-4 position-absolute start-0 mt-5'   />
                <img src={coco} className='img-fluid shadow-4  left-start'   />
                <svg className='position-absolute bottom-0 end-0 put-index' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                  <path className='wave' fill="white" fill-opacity="1" d="M0,0L34.3,0C68.6,0,137,0,206,5.3C274.3,11,343,21,411,37.3C480,53,549,75,617,101.3C685.7,128,754,160,823,186.7C891.4,213,960,235,1029,245.3C1097.1,256,1166,256,1234,224C1302.9,192,1371,128,1406,96L1440,64L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path>
                </svg>
                  {/* content show to the user */}
                  <Container>
                  <div className='position-absolute top-text start-50 '>
                    <h1 className='text-light text-lg header-content'>Welcome to us</h1>
                    <p  className='text-light content-descript'>This service provide the basic services you are seeking for.<br/><strong>Please engage with us now !</strong></p>
                  </div>
                  </Container>
                  <img src={multi} className='img-fluid shadow-4 w-70 h-70 position-absolute multiLogo '   />
                 
                  
                  <div className='position-absolute joinUs'>
                      <a  href='/Login'> <i class="fa fa-long-arrow-right" aria-hidden="true"></i>Join us</a>
                  </div>
                </div>
              </Container>
              {/* section two list categories of services */}
              <Container>
              <section>
              <h2 className='ml-3 text-sm'><i class="fa fa-cogs" aria-hidden="true"></i> Services</h2>
              <hr/>
              <container>
              <div className='filter-control'>
              <Form.Select onChange={e=> setSearch(e.target.value)} size="sm" className='m-2'>
                <option selected="default">default selected</option>
                <option>Engineer</option>
                <option> Architect </option>
                <option> IT</option>
                <option> Electrician</option>
                <option>Electronician</option>
                <option>Home-Appliance</option>
                <option> Graphic-Designer</option>
              </Form.Select>
              <div className='sub-filter-control'>
              <Form.Control
                      type="search"
                      placeholder="Region.."
                      className="me-2 m-2"
                      aria-label="Search"
                      value={null}
                      onChange={e=>{setFilter(e.target.value);}}
                    />
              </div>
              </div>
              </container>
              <Container className='mt-3'>
                {
                  products.map(product => <Product service={{productT : product, saverv2 : props.home.saver}} />)
                }    
              </Container>
              </section>
              </Container>
              <Container className='mt-4'>
              <footer className=" bg-light text-center text-lg-start ">
              <div className=" footer-customize ">
                  <div>
                      <h3>Services partner</h3>
                      <div>
                        <i class="fa fa-telegram" aria-hidden="true"></i> +855 10234598
                      </div>
                      <div>
                        <i class="fa fa-envelope" aria-hidden="true"></i>  Workshop@123gmail.com
                      </div>
                      <div>
                      <i class="fa fa-linkedin-square" aria-hidden="true"></i> +855 10234598
                      </div>
                  </div>
                  <div>
                      <h3>Contact us</h3>
                      <div>
                        <i class="fa fa-telegram" aria-hidden="true"></i> +855 10234598
                      </div>
                      <div>
                        <i class="fa fa-envelope" aria-hidden="true"></i>  Workshop@123gmail.com
                      </div>
                      <div>
                      <i class="fa fa-linkedin-square" aria-hidden="true"></i> +855 10234598
                      </div>
                  </div>
              </div>
              <div className="text-center p-3 footer-override" >
                © 2020 Copyright:
                <a className=" footer-override-link" href=""> Interprise.com</a>
              </div>
              </footer>
              </Container>
              <div className='redirector position-fixed' id="scrollNav" >
              <a href="#"><i class="fa fa-angle-double-up" aria-hidden="true"></i></a>
              </div>
        </div>
    )
}
// {D.map((pusher)=>(<Product service={pusher}/>))}
// export the HomePage componet to the outside enviroment
// {props.home.data && props.home.data.map((d)=>(<div>{JSON.stringify(d)}</div>))}
export default HomePage;
