import { Outlet } from "react-router-dom";
const About = () => {
  return (
    <div>
        <h1>About Us Page</h1>
        <p>This is the kitchen react app chapter 07 - finding the path</p>
        <Outlet></Outlet>
    </div>
  )
}

export default About;