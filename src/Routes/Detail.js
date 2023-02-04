import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../assets/app.css";
import MapUser from "./MapUser";
const Detail = ()  => {
    const {state} = useLocation();
    const {data} = state;
    const Lat_lng = data.latlng.split(",");
    const lat = parseFloat(Lat_lng[0]);
    const lng = parseFloat(Lat_lng[1]);
    useEffect(()=>{
       console.log("detail data at detail : ", data);
    },[]);
    
    return(
        <div className="container-fluid d-flex flex-column justify-content-center mt-3">
            <div className="container-md ">
                <h2>Profile</h2>
                <hr></hr>
            </div>
            <div className=" changeFlex container-md  justify-content-around shadow-lg p-3 mb5 bg-body-tertiary rounded">
                <div className="changeFlex profile justify-content-between">
                    <img src={data.image[0]} className="img-change-width transiTion shadow-lg p-3 mb-5  img-fluid image-cover-detail" alt={data.specilist}></img>
                    <div className="personal-info d-flex flex-column  ">
                     <p className="moveLeft"><span class="badge rounded-pill bg-primary p-2 w-100 fs-5 ">specialist <strong className="text-warning"> {data.specialist}</strong></span></p>
                     <div>
                        <p className="moveLeft" ><strong><i class="fa fa-american-sign-language-interpreting m-1 p-1" aria-hidden="true"></i>Epertise of </strong>{data.profession}</p>
                        <div className="d-flex align-items-center moveLeft">       
                                <p><i class="fa fa-volume-control-phone m-2 pl-1 text-success" aria-hidden="true"></i> {data.phoneContact}</p>
                                <p><i class="fa fa-globe m-2 pl-1 text-primary" aria-hidden="true"></i> {data.location}</p>
                        </div>
                        <p className="moveLeft"><strong><i class="fa fa-user-md m-1 p-1" aria-hidden="true"></i>Seft interest </strong>{data.seftDescription}</p>
                     </div>
                    
                     </div>
                </div>
                <div className="d-flex flex-column  align-self-center">
                    <strong className="text-center mb-2">Quality evaluation</strong>
                    <div className="d-flex flex-row">
                                    <i class="transiTion fs-2 fa fa-star-o m-1 text-warning" aria-hidden="true"></i>
                                    <i class="transiTion fs-2 fa fa-star-o m-1" aria-hidden="true"></i>
                                    <i class="transiTion fs-2 fa fa-star-o m-1" aria-hidden="true"></i>
                                    <i class="transiTion fs-2 fa fa-star-o m-1" aria-hidden="true"></i>
                                    <i class="transiTion fs-2 fa fa-star-o m-1" aria-hidden="true"></i>
                    </div>
                                    
                </div>
            </div>
            <div className="container-md mt-3">
                <h2>Personal Experience</h2>
                <hr></hr>
            </div>
           
            <div className="container-md  justify-content-between changeFlex">
                
                <div className="  container-fluid shadow-lg p-2 m-1  bg-body-tertiary rounded">
                    <p>
                        <strong>
                                {data.background}
                        </strong>
                    </p>
                </div>
                <div className=" container-fluid d-flex flex-row justify-content-evenly align-items-center shadow-lg p-2 m-1 bg-body-tertiary rounded">
                        <div className ="d-flex flex-column align-items-center justify-content-center">
                            <strong>Telegram</strong>
                            <i class="transiTion fa fa-telegram fs-2 shadow-lg p-2  bg-body-tertiary rounded text-primary" aria-hidden="true">
                                <a href={""}></a>
                            </i>
                        </div>
                        <div className ="d-flex flex-column align-items-center justify-content-center">
                            <strong>Linked</strong>
                            <i class="transiTion fa fa-linkedin-square shadow-lg fs-2 p-2  bg-body-tertiary rounded text-primary" aria-hidden="true">
                            <a href={""}></a>
                            </i>
                        </div>
                        <div className ="d-flex flex-column align-items-center justify-content-center">
                            <strong>Gmail</strong>
                            <i class="transiTion fa fa-google-plus-square fs-2 p-2 bg-body-tertiary rounded text-danger" aria-hidden="true">
                             <a href={""}></a>
                            </i>
                        </div>
                </div>
            </div>

            <div className="container-md mt-3">
                <h2>Related Work</h2>
                <hr></hr>
            </div>

            <div className="container-md shadow-lg p-3 mb5 bg-body-tertiary rounded d-flex flex-wrap justify-content-evenly align-items-start">
                {data.relatedWork.map((image)=> (<img src={image} className="transiTion rounded img-fluid mt-2" alt="Cinque Terre"></img>))}     
            </div>

            <div className="container-md mt-3">
                <h2>Location</h2>
                <hr></hr>
            </div>

            <div className="container-md shadow-lg p-3 mb5 bg-body-tertiary rounded d-flex flex-wrap ">
                <MapUser data={{latlng: [lat,lng] ,height: 300}} />
            </div>
            <hr></hr>
        </div>
    )
}

// export Detail component to available outside environment
export default Detail;