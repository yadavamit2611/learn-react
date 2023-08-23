import { Outlet } from "react-router-dom";
import React from "react";
const AboutTo = () => {
  return (
    <div>
        <h1>About Us Page</h1>
        <p>This is the kitchen react app chapter 07 - finding the path</p>
        <Outlet></Outlet>
    </div>
  )
}
class About extends React.Component{
  constructor(props){
    super(props); 
    this.state = {
      profileData : {
        name : "DummyName",
        location : "dummyLocation"
      }
    } 
    console.log("constructor");
  }

  async componentDidMount(){
    const data = await fetch("https://api.github.com/users/yadavamit2611");
    const jsonData = await data.json();
    this.setState({
      profileData : jsonData
    });
    this.timer = setInterval(() => {
      console.log("start interval");
    },1000);
    console.log("component did mount");
  }

  componentDidUpdate(){
    console.log("component did update");
  }

  componentWillUnmount(){
    console.log("component will unmount");
    clearInterval(this.timer);
  }

  render(){
    const {name,location,avatar_url,bio} = this.state.profileData;
    console.log("render");
    return (
      <div className="about-us-body">
        <h1>About Us</h1>
        <div className="about-elements">
            <div className="profile-card">
              <img className="profile-photo" src={avatar_url}></img>
              <div className="profile-details">
                  <h2>Name :  {name} </h2>
                  <h2>Location :  {location} </h2>
              </div>
            </div>
            <div><h2 style={{fontStyle:"italic",color:"white"}}> "{bio}"</h2></div>
         </div>
      </div>
    )    
  }
}

export default About;