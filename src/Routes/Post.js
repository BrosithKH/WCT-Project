import React from "react";
import { useState,useEffect} from "react";
import Axios from "axios";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import Map from "./Map";
import "../assets/Post.css";

const Post = () =>{
    // sweet alert instance
    const MySwal = withReactContent(Swal)
    
    const Allcoordinate ={
        Coordinate : [11.5639,104.9313]
    }
    
    const [title ,setName] = useState();
    const [work ,setWork] = useState();
    const [back ,setBack] = useState();
    const [latlng,setlatlng] = useState();
    const [preview, setPreview] = useState();

    const Prop = {
        "GetCoordinate" : (lat,lng) =>setlatlng([lat,lng]),
        "Coordinate" : Allcoordinate["Phnom Penh"]
    }
    const [Maper,setMaper] = useState();

    function upload(evt){
        evt.preventDefault();
        // create new form data to be ready sent to the server
        const formdata=  new FormData();
        
        // reRender th page when the value of rerender was changed
        // add those data to the server
        formdata.append("latlng",latlng);
        formdata.append("title",title);
        formdata.append("back",back);
        for(const file of work){
            console.log(file);
            formdata.append("relatedWork",file);
        }
       
        Axios.post("http://localhost:4000/postContent",formdata,{withCredentials: true}).then(res=> {
            MySwal.fire({
                title: <strong>Insert successfully!</strong>,
                html: <i>Congratualation Admin!</i>,
                icon: 'success'
              })
              console.log(res)
        }).catch(err =>console.log(err));   
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
        
        <div className="container-sm mt-3 ">
            <form onSubmit={upload}>
                <div className="container">
                    <div className="row ">
                        <div className="col">
                            <h1>Post Content</h1>
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
                            <label >Company name</label>
                            <input type="text" className="form-control"  placeholder="Title" onChange={e => setName(e.target.value)}></input>
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
                                    <Map data={Allcoordinate}/>
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
                        <label>Content-Description</label>
                            <textarea className="p-2" value={back} onChange={e=>setBack(e.target.value)} placeholder="Write the content description here" cols={100} rows={10}/>  
                        </div>
                    </div>
                
                </div>

                <hr></hr>
                <div className="row mt-2">
                    <div className="col-sm">
                        <div className="form-group">
                            <label >Post Related Work</label>
                            <input type="file" className="custom-file-input" name="relatedWork"  onChange={e => {setWork(e.target.files); handlePreview(e);}} multiple></input>
                        </div>
                        {preview && (
                        <div>
                        <img src={preview} alt="Preview" className="img-preview" />
                        <input type="remove" className="btn btn-primary mt-4" onClick={removePreview} value="Remove"></input>
                        </div>
                      )}
                    </div>
                </div>

                <input type="submit" className="btn btn-primary mt-4" value="Post Content"></input>
            </form>
            
        </div>

        
    )
}
// export the component to be available in the outside environment
export default Post;