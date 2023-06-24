import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1",
{ 
    id:"title",
    className:"myclass",
    key:"heading1",
},"Heading 1 for parcel");

const heading2 = React.createElement("h2",
{ 
    id:"title1",
    className:"myclass",
    key:"heading2",
},"Heading 2");

const container = React.createElement(
    "div",
    {
        id:"container"
    },
    [heading,heading2]);

const root = ReactDOM.createRoot(document.getElementById("root"));
//parsing a react element into the root

//async defer
root.render(container);

