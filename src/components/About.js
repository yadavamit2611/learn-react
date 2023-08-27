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
/*     this.timer = setInterval(() => {
      console.log("start interval");
    },1000);
    console.log("component did mount"); */
  }

  componentDidUpdate(){
    console.log("component did update");
  }

  componentWillUnmount(){
/*     console.log("component will unmount");
    clearInterval(this.timer); */
  }

  render(){
    const {name,location,avatar_url,bio} = this.state.profileData;
    console.log("render");
    return (
      <div className="bg-slate-600 h-5/6">
        {/* <h1 className="text-white text-center text-4xl font-bold">About Us</h1> */}
      <div className="flex flex-col justify-center items-center">
      <div className="bg-slate-800 text-white text w-6/12 p-5 rounded-b-2xl">
            <div className="flex flex-row justify-center items-center">
              <img className="rounded-full h-28 border-2" src={avatar_url}></img>
              <div className="bg-white text-black mx-2 p-4 rounded-lg">
                  <h2>Name :  {name} </h2>
                  <h2>Location :  {location} </h2>
                  <h2 className="font-serif text-green-800">"{bio}"</h2>
              </div>
            </div>
         </div>
      </div>
      </div>
    )    
  }
}

export default About;