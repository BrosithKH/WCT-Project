import React from "react";
import { useState , useEffect } from "react";
import { GoogleMap,  LoadScript, Marker } from "@react-google-maps/api";

const Map =  function (props){
    const [position,setposition] = useState([props.data.Coordinate[0],props.data.Coordinate[1]]);
    // const [re,setre] = useState(false);
    // useEffect(()=>{},[position]);

    const initialMarkers = [
        {
            position: {
                lat: position[0],
                lng: position[1]
            },
            label: { color: "white", text: "Working Place" },
            draggable: true
        }
    ];
    const [markers, setMarkers] = useState(initialMarkers);
    

    const containerStyle = {
        width: "100%",
        height: "400px",
    }

    const center = {
        lat: position[0],
        lng: position[1],
    }

    const mapClicked = (event) => { 
        //console.log(event.latLng.lat(), event.latLng.lng()) ;
        setposition([event.latLng.lat(),event.latLng.lng()]);
        // if(re ===true){
        //     setre(false);
        // }else{
        //     setre(true);
        // }

        
    }
    const markerDragEnd = (event) => { 
        console.log(event.latLng.lat())
        console.log(event.latLng.lng())
        props.data.GetCoordinate(event.latLng.lat(),event.latLng.lng());
    }
    //console.log(props.data.Coordinate[0]+","+props.data.Coordinate[1])
    return (
        <LoadScript googleMapsApiKey='AIzaSyA1Za4RFNuxAwInFpp2iTlS1ri07Tr0K5E'>
            <GoogleMap 
                mapContainerStyle={containerStyle} 
                center={center} 
                zoom={15}
                onDrag={()=>{}}
                onClick={mapClicked}
            >
                {markers.map((marker, index) => (
                    <Marker 
                        key={index} 
                        position={marker.position}
                        label={marker.label}
                        draggable={marker.draggable}
                        onDragEnd={event => markerDragEnd(event, index)} 
                    >
                        
                    </Marker>
                ))}
            </GoogleMap>
        </LoadScript>
        
    );
}
export default Map;