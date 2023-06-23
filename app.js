const heading = React.createElement("h1",
{ 
    id:"title",
    className:"myclass",
},"Heading 1");

const heading2 = React.createElement("h2",
{ 
    id:"title1",
    className:"myclass",
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