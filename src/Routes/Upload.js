import React from "react";
import { useState,useEffect} from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Map from "./Map";
import Axios from "axios";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const Upload = () =>{
    // sweet alert instance
    const MySwal = withReactContent(Swal)
    const Allcoordinate ={
        "Phnom Penh" : [11.5639,104.9313],
        "Pursat"     : [12.545455093523321,103.92133240356442]
    }
    const [name ,setName] = useState();
    const [des ,setDes] = useState();
    const [cate ,setCate] = useState("Engineer");
    const [telle ,setTelle] = useState();
    const [linked ,setLinked] = useState();
    const [line ,setLine] = useState();
    const [work ,setWork] = useState();
    const [locat ,setLocat] = useState("Phnom Penh");
    const [profess ,setProfess] = useState();
    const [phone ,setPhone] = useState();
    const [back ,setBack] = useState();
    const [profile ,setProfile] = useState();
    const [latlng,setlatlng] = useState();
    const [newcate,setnewcate] = useState();
    const [Opt,setOpt] = useState("specific");
    const [Specific,setSpecific] = useState();
    const showHide = Opt === "specific"? true : false;
    const Prop = {
        "GetCoordinate" : (lat,lng) =>setlatlng([lat,lng]),
        "Coordinate" : Allcoordinate[locat]
    }
    console.log("location",locat)
    const [Maper,setMaper] = useState();
    function upload(evt){
        evt.preventDefault();
        // create new form data to be ready sent to the server
        const formdata=  new FormData();
        
        // reRender th page when the value of rerender was changed
        // add those data to the server

        formdata.append("latlng",latlng);
        formdata.append("specialist",name);
        formdata.append("des",des);
        formdata.append("category",cate);
        formdata.append("telegram",telle);
        formdata.append("linkedIn",linked);
        formdata.append("line",line);
        for(const file of work){
            console.log(file);
            formdata.append("relatedWork",file);
        }
        formdata.append("location",locat);
        formdata.append("profession",profess);
        formdata.append("phone",phone);
        formdata.append("background",back);
        formdata.append("profile",profile);
        Axios.post("http://localhost:4000/insertData",formdata).then(res=> {
            MySwal.fire({
                title: <strong>Insert successfully!</strong>,
                html: <i>Congratualation Admin!</i>,
                icon: 'success'
              })
              console.log(res)
        }).catch(err =>console.log(err));   
    }
    function Newcategory(evt){
        evt.preventDefault();
        //ready to submit new category to the server
        Axios.post("http://localhost:4000/setNew",newcate).then((res)=>{
            MySwal.fire({
                title: <strong>Insert new category successfully!</strong>,
                html: <i>Congratualation Admin!</i>,
                icon: 'success'
              })
              console.log(res)
        }).catch((err)=>{
            console.log(err)
        })
    }
    useEffect(()=>{
        setMaper(<Map data={Prop} />);
    },[]);

    return(
        
        <div className="gradient container-sm mt-3">
            <form onSubmit={upload}>
                <div className="container">
                    <div className="row ">
                        <div className="col">
                            <h1>Adminstrative Management</h1>
                        </div>
                        <div className="col text-center mt-4">
                            <p><strong>Tue-12-2023</strong></p>
                        </div>
                    </div>
                </div>
                
                <hr></hr>
                <div className="row mt-2">
                    <div className="col-sm">
                        <div className="form-group">
                            <label >Specialist Name</label>
                            <input type="text" className="form-control"  placeholder="Name" onChange={e => setName(e.target.value)}></input>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div className="form-group">
                            <label>Seft Description</label>
                            <input type="text" className="form-control"   placeholder="Description" onChange={e => setDes(e.target.value)}></input>
                        </div>
                    </div>
                    <div className="col-sm">
                        <label >Post Category</label>
                        <select className="form-control" name="category" value={cate} onChange={e=> setCate(e.target.value)}>
                            <option value="Engineer">Engineer</option>
                            <option value="Architect">Architect</option>
                            <option value="IT">IT</option>
                            <option value="Home-Appliance">Home-Appliance</option>
                            <option value="Electrician">Electrician</option>
                            <option value="Electronician">Electronician</option>
                            <option value="Graphic-Designer">Graphic-Designer</option>
                        </select>

                    </div>
                </div>
        <hr></hr>
                <div className="row mt-2">
                    <div className="col-sm">
                        <div className="form-group">
                            <label >Telegram</label>
                            <input type="text" className="form-control" id="telegram"  placeholder="Past Link" onChange={e=>setTelle(e.target.value)}></input>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div className="form-group">
                            <label >LinkedIn</label>
                            <input type="text" className="form-control" id="specialist"  placeholder="Past Link" onChange={e=>setLinked(e.target.value)}></input>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div className="form-group">
                            <label>Line</label>
                            <input type="text" className="form-control" id="specialist"  placeholder="Past Link" onChange={e => setLine(e.target.value)}></input>
                        </div>
                    </div>
                </div>

                <hr></hr>
                <div className="row mt-2">
                    <div className="col-sm">
                        <div className="form-group">
                            <label >Post Related Work</label>
                            <input type="file" className="custom-file-input" name="relatedWork"  onChange={e => setWork(e.target.files) } multiple></input>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div className="form-group">
                            <div className="input-group mb-3">
                                <div className="input-group-prepend mt-1">
                                    <label className="input-group-text" >Current Location</label>
                                </div>
                                <select className="custom-select" onChange={
                                    e =>{
                                        setLocat(e.target.value);
                                    }
                                    }>
                                    <option selected value="Phnom Penh">Phnom Penh</option>
                                    <option value="Battambang">Battambang</option>
                                    <option value="Kampong Cham">Kampong Cham</option>
                                    <option value="Pursat">Pursat</option>
                                    <option value="Koh Kong">Koh Kong</option>
                                    <option value="Banteay Meanchey">Banteay Meanchey</option>
                                    <option value="Kampong Speu">Kampong Speu</option>
                                    <option value="Kampong Thom">Kampong Thom</option>
                                    <option value="Kampot">Kampot</option>
                                    <option value="Kandal">Kandal</option>
                                    <option value="Koh Kong">Koh Kong</option>
                                    <option value="Mondulkiri">Mondulkiri</option>
                                    <option value="Preah Vihear">Preah Vihear</option>
                                    <option value="Prey Veng">Prey Veng</option>
                                    <option value="Ratanakiri">Ratanakiri</option>
                                    <option value="Siem Reap">Siem Reap</option>
                                    <option value="Preah Sihanouk">Preah Sihanouk</option>
                                    <option value="Stung Treng">Stung Treng</option>
                                    <option value="Svay Rieng">Svay Rieng</option>
                                    <option value="Takeo">Takeo</option>
                                    <option value="Oddar Meanchey">Oddar Meanchey</option>
                                    <option value="Kep">Kep</option>
                                    <option value="Pailin">Pailin</option>
                                    <option value="Tboung Khmum">Tboung Khmum</option>
                                    <option value="Kratie">Kratie</option>
                                    
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div className="form-group">
                            <label >Plot Map For Location</label>
                            <br></br>
                                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal">
                                        Plot Map location
                                </button>
                        </div>
                            <div class="modal" id="myModal">
                            <div class="modal-dialog modal-lg">
                                <div class="modal-content">
                                <div class="modal-header">
                                    <h4 class="modal-title">Modal Heading</h4>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                                </div>
                                <div class="modal-body">
                                    {(Maper)}
                                </div>   
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <hr></hr>
                <div className="row mt-2">
                    <div className="col-sm">
                        <div className="form-group">
                            <label >Profession</label>
                            <input type="text" className="form-control" id="profession"  placeholder="Profession" onChange={e=>setProfess(e.target.value)}></input>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div className="form-group">
                            <label>Phone Contact</label>
                            <input type="text" className="form-control" id="Phone"  placeholder="Phone contact" onChange={e=>setPhone(e.target.value)}></input>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div className="form-group">
                            <label >Server Profile</label>
                            <input type="file" className="custom-file-input" name="profile" onChange={e => setProfile(e.target.files[0])}></input>
                        </div>
                    </div>
                </div>

                <hr></hr>
                <div className="row mt-2">
                    <div className="col-sm">
                        <div className="form-group">
                        <label>Your entire life experience</label>
                            <textarea className="p-2" value={back} onChange={e=>setBack(e.target.value)} placeholder="write your background" cols={40} rows={10}/>  
                        </div>
                    </div>
                    <div className="col-sm">
                        
                    </div>
                    <div className="col-sm">
                        
                    </div>
                </div>
                <input type="submit" className="btn btn-primary mt-4" value="Post Content"></input>
            </form>


            <br></br>
            <hr></hr>
            <div className="container">
                <div className="row ">
                    <div className="col">
                        <h1>Delete and Updata </h1>
                    </div>
                    <div className="col text-center mt-4">
                        <p><strong>Tue-12-2023</strong></p>
                    </div>
                </div>
                <form onSubmit={Newcategory}>
                <div className="row mt-2">
                    <div className="col-sm">
                        <div className="form-group">
                            <label >Delete option</label>
                            <select class="form-select" id="sel1" name="opt" onChange={(e)=> setOpt(e.target.value)}>
                                <option selected="specific">specific</option>
                                <option value="all">all</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-sm">
                        { showHide ? (
                        <div className="form-group">   
                           <label >Fill name of specialist</label>
                           <input type="text" className="form-control" id="category" onChange={(e)=> setSpecific(e.target.value)} placeholder="Name of specialist"></input>
                       </div>) : "" 
                       }
                    </div>
                    <div className="col-sm">
                    <button className="btn btn-primary mt-3 ml-2" onClick={()=>{
                         if(Opt === "all"){
                            Axios.delete('http://localhost:4000/delete').then(
                                (res) => alert(res)
                            ).catch((err)=> alert(err) )
                         }else{
                            if(Specific !== undefined){
                                Axios.delete(`http://localhost:4000/deleteData/${Specific}`).then(
                                    (res) => alert(res)
                                ).catch((err)=> alert(err) )
                            }
                         }
                    }}>Delete</button>
                    </div>
                </div>
                
            </form>
            </div>
        </div>

        
    )
}
// export the component to be available in the outside environment
export default Upload;