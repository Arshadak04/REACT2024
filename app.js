// console.log("Hello")
import React from "react";
import ReactDOM from "react-dom/client";

const haeding=React.createElement("h1",{id:"h1-class"},"Hello This Js Contain")

const recursive=React.createElement("div",
    {id:"parent"},
    [
        React.createElement("div",
            {id:"child"},
            [React.createElement("h1",
                {id:"h1-class"},
                "Hello This Js Contain"),
                React.createElement("h2",
                    {id:"h2-class"},
                    "Hello This Js Contain h2")]
            ),
            React.createElement("div",
                {id:"child-2"},
                [React.createElement("h1",
                    {id:"h1-class-2"},
                    "Hello This Js Contain"),
                    React.createElement("h2",
                        {id:"h2-class-2"},
                        "Hello This Js Contain h2")]
                )
    ]
    )
//react Element
    const jsxheading=<h1 id="h1-class">Hello This is JSX</h1>

    //react component for other component
    const NewTitle = ()=>(
        <h1>I am inside secodary component</h1>
    )
    // React Component
    const NewComponent = ()=>(
        <div>
            {jsxheading}
            {<NewTitle/>}
            <h1 id="h1-classvt">Hello This is inside the react Component {<NewTitle/>}</h1>
        </div>
    );
    
    // function Car() {
    //     return <h2>Hi, I am a Car!</h2>;
    //   }
const root=ReactDOM.createRoot(document.getElementById("hello"));
// root.render(haeding)
// console.log(recursive)
// console.log(jsxheading)
//rendering react element
// root.render(jsxheading)
//rendering a react  component
root.render(<NewComponent />);
// root.render(<Car/>)

