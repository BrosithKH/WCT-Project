import Axios from "axios";
  const About = () =>{

    return(
        <div className="container-md">
            <h2>About us </h2>
            <hr></hr>
            <p>
                The main stimulation of the purpose  to build this platform was that in our society currently what is the difficulty when we need to hire some one to do something for us.Especially , which services are reliable and trusted as well as accompanied with a high quality. That is why, we created this website to facilitate our general problem related to aforementioned issue called 
                <strong>  Khservices or called in knmer រោងជាង</strong>. This services provide a very convenient way to our users to find their desired services based on their own case. More importantly, each services also has the credit,which convey 
                that how good or reliable that service provider is.<br></br> 
                This service is established under controlled of our team . we spend almost a semester of year 3 implementing this platform.
                Over all , we all firmly believe that this platform is going to play a significant role to help the people need .<strong> Try the new taste of your life in 4.0 industry. Every imposible stuff become reality unmistakably.</strong>
            </p>
            <button onClick={
              ()=>{
                Axios.get('http://localhost:4000/getProfile',{withCredentials : true}).then(res => console.log("solo",res)).catch(err => console.log(err))
              }
            }></button>
        </div>
    )
  }
  export default About;