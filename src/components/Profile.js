import Profilef from "./ProfileClass"
import { useState } from "react"
import { useEffect } from "react";
const Profile = (props) => {
    const [count,setCount] = useState(0);
    const [count2,setCount2] = useState(1);
    useEffect(() => 
    {
        // api call
        //console.log("Use Effect");
    }, [count2]);
    //console.log("render");
  return (
    <div>
        <h1>Profile</h1>
        <p>{props.name}</p>
        <p>count : {count}</p>
        <p>count : {count2}</p>
        <button onClick={() => {
            setCount(count + 1);
            setCount2(count2 + 1);
        }}>Increment</button>
        <Profilef name={"Amit Class"} xyz={"xyz"}></Profilef>
    </div>
  )
}
export default Profile