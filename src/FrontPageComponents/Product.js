
import "../assets/app.css";
import IndividualProduct from './IndividualProduct';
import { useState,useEffect } from "react";

const Product = (props) =>{
    //const [categoryShow,setcategoryShow] = useState(props.service.data);
    const [showMoreBtn,setshowMoreBtn] = useState(false);
    let categoryShow =[];
    function checkLimit(){
      let arr=[];
      for(let i=0; i<3;i++){
         arr.push(props.service.productT.data[i]);
      }
      return arr;
    }
    // check the number of product 
    if( !showMoreBtn && props.service.productT.data.length>=3){
      categoryShow = checkLimit();
    }else if(showMoreBtn &&  props.service.productT.data.length>=3){
      categoryShow = props.service.productT.data;
    }else if(props.service.productT.data.length<3 &&  props.service.productT.data.length>=1){
      categoryShow = props.service.productT.data;
    }else{
      categoryShow=[];
    }
    console.log("I am fuch : ",categoryShow.length);
    console.log("search:",categoryShow);
    console.log("props:",props.service.productT.data);
    useEffect(()=>{ 
    },[showMoreBtn]);
   
    return(
        <>     
          <br/>
          <h3 className='text-center'>{props.service.productT.category}</h3>
          <br/>
          <hr/>  
                  <div className='product-flex'>
                  {/* call individual product */}
                  {categoryShow && categoryShow.map(data=>(<IndividualProduct data={{source : data, saverv3:props.service.saverv2}}/>))}
                  </div>
          <br/>
          <div className='text-center'>
      
            {categoryShow.length>=3? !showMoreBtn ? (<button className="btn btn-primary" onClick={()=>{setshowMoreBtn(true)}}>Show more</button>): (<button className="btn btn-danger" onClick={()=>{setshowMoreBtn(false)}}>Hide</button>) : ""}
            </div>
          <hr/>               

        </>
    )
}
//{data.data.map((data)=>  <IndividualProduct data={data} /> )}
// export the Product components to the outside enviroment
// {props.service.data.map(d=>(<IndividualProduct data={d}/>))}
export default Product;