import React from "react";
import {useState} from "react";
import Axios from "axios";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { useNavigate } from "react-router-dom";
import Map from "./Map";

const ProfileEdit = () => {

// sweet alert instance
const MySwal = withReactContent(Swal)

const navigate = useNavigate();

const [name ,setName] = useState();
const [des ,setDes] = useState();
const [cate ,setCate] = useState("Engineer");
const [telle ,setTelle] = useState();
const [gmail ,setGmail] = useState();
const [line ,setLine] = useState();
const [locat ,setLocat] = useState("Phnom Penh");
const [profess ,setProfess] = useState();
const [phone ,setPhone] = useState();
const [back ,setBack] = useState();
const [profile ,setProfile] = useState();
const [newcate,setnewcate] = useState();
const [preview, setPreview] = useState();


const upload = async (e) => {
    e.preventDefault();
    // create new form data to be ready sent to the server
    const formdata=  new FormData();
    
    // reRender th page when the value of rerender was changed
    // add those data to the server

    
    formdata.append("specialist",name);
    formdata.append("description",des);
    formdata.append("category",cate);
    formdata.append("telegram",telle);
    formdata.append("gmail",gmail);
    formdata.append("line",line);

    formdata.append("location",locat);
    formdata.append("profession",profess);
    formdata.append("phone",phone);
    formdata.append("background",back);
    formdata.append("profile",profile);

    
    Axios.post("http://localhost:4000/editPost",formdata,{withCredentials : true}).then(res=> {
        MySwal.fire({
            title: <strong>Insert successfully!</strong>,
            html: <i>Congratualation Admin!</i>,
            icon: 'success'
          })
          console.log(res)
    }).catch(err =>console.log(err));   
    navigate('/profile');
}

function handlePreview(e) {
      const previewFile = e.target.files[0];
      const reader = new FileReader();
  
      reader.onloadend = () => {
        setPreview(reader.result);
      };
  
      reader.readAsDataURL(previewFile);
    }

    function removePreview(){
      setPreview(null);
    }

    return(
        <div className="container-sm mt-3">
                <div className="container">
                    <div className="row ">
                        <div className="col">
                            <h1>Edit Profile Information</h1>
                        </div>
                        <div className="col text-center mt-4">
                            <p><strong>Tue-12-2023</strong></p>
                        </div>
                    </div>
                </div>
                
                <hr></hr>
                <form onSubmit={upload}>
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
                            <input type="text" className="form-control" id="telegram"  placeholder="Paste Link" onChange={e=>setTelle(e.target.value)}></input>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div className="form-group">
                            <label >Gmail</label>
                            <input type="text" className="form-control" id="specialist"  placeholder="Paste Link" onChange={e=>setGmail(e.target.value)}></input>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div className="form-group">
                            <label>Line</label>
                            <input type="text" className="form-control" id="specialist"  placeholder="Paste Link" onChange={e => setLine(e.target.value)}></input>
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
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
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
                </div>

                <hr></hr>
                <div className="row mt-2">
                    <div className="col-sm">
                    <div className="form-group">
                            <label >User Profile</label>
                            <input type="file" className="custom-file-input" name="profile" onChange={e => {setProfile(e.target.files[0]); handlePreview(e); }}></input>
                        </div>
                        {preview && (
                        <div>
                        <img src={preview} alt="Preview" className="img-preview" />
                        <input type="remove" className="btn btn-primary mt-4" onClick={removePreview} value="Remove"></input>
                        </div>
                      )}
                    </div>
                    <div className="col-sm">
                        
                    </div>
                    <div className="col-sm">
                        
                    </div>
                </div>

                <hr></hr>
                <div className="row mt-2">
                    <div className="col-sm">
                        <div className="form-group">
                        <label>Your life / work experience</label>
                            <textarea className="p-2" value={back} onChange={e=>setBack(e.target.value)} placeholder="write your background" cols={80} rows={10}/>  
                        </div>
                    </div>
                </div>
                <input type="submit" className="btn btn-primary mt-4" value="Save"></input>
            </form>
            <br></br>
            <hr></hr>
            
        </div>
    );
};

export default ProfileEdit;