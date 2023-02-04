
import { Card,Button } from 'react-bootstrap';
import "../assets/app.css";
import { useState,useEffect } from 'react';
import PostDetail from './PostDetail';
import { useNavigate } from 'react-router-dom';
import MapUser from '../Routes/MapUser';
const IndividualProduct = (props) => {
  const navigate = useNavigate();
  const [go,setgo] = useState(false);
  const Lat_lng = props.data.source.latlng.split(",");
  const lat = parseFloat(Lat_lng[0]);
  const lng = parseFloat(Lat_lng[1]);
  useEffect(
    ()=>{
    if(go){
      navigate('/detail', { state: {  data: props.data.source } })
    }
  },[go]);
    return(
        <>
                    <div className=' p-1 m-1 product-flex-item'>
                    <Card className='removeOutline'>
                        <Card.Body>
                          <Card.Title className='mb-2'>{props.data.source.id}.{props.data.source.specialist}</Card.Title>
                          <hr/>
                          <Card.Text>
                          <div className='description-flex'>
                            <img src={props.data.source.image[0]} className='image-cover'/>
                            <div>
                                <p><i class="fa fa-phone" aria-hidden="true"></i> {props.data.source.phoneContact}</p>
                                <p className='description-flex-start'>
                                    <i class="fa fa-star-o m-1 text-warning" aria-hidden="true"></i>
                                    <i class="fa fa-star-o m-1" aria-hidden="true"></i>
                                    <i class="fa fa-star-o m-1" aria-hidden="true"></i>
                                    <i class="fa fa-star-o m-1" aria-hidden="true"></i>
                                    <i class="fa fa-star-o m-1" aria-hidden="true"></i>
                                </p>
                            </div>
                          </div>        
                            <hr/>
                            <div className='d-flex flex-row justify-content-between align-items-center'>
                            <p><i class="fa fa-ship" aria-hidden="true"></i> <strong>{props.data.source.category}</strong></p>
                            <p><i class="fa fa-location-arrow" aria-hidden="true"></i> <strong> {props.data.source.location}</strong></p>
                            </div> 
                            <p className='mt-2' onClick={()=>{
                               go ? setgo(false) : setgo(true);
                               //setgo(true);
                               //  props.data.saverv3(props.data.source)
                                // get the current URL of the page
                               
                            }}> <strong>{props.data.source.seftDescription}</strong>. 
                              More
                            </p>
                         </Card.Text>
                            <div className='d-flex flex-row justify-content-between align-items-center'>
                            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Location</button>
                            <Button variant="primary" ><i class="fa fa-telegram" aria-hidden="true"></i> Hire</Button>
                            </div>
                         </Card.Body>
                      </Card>
                      
                      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered">
                          <div class="modal-content">
                            <div class="modal-header">
                              <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <MapUser data={{latlng: [lat,lng] ,height: 300}}/>
                            </div>
                            <div class="modal-footer">
                              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
        </>
        )
}

export default IndividualProduct;
