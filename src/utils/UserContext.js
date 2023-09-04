import { createContext } from "react";
const UserContext = createContext({user : {
    name: "dummy name",
    email: "dummy21@gmail.com",
}});

UserContext.displayName = "UserContext";
export default UserContext;
