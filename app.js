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
const root=ReactDOM.createRoot(document.getElementById("hello"));
// root.render(haeding)
// console.log(recursive)
root.render(recursive)