import React from "react";

const DisplayName = (props) =>{
    console.log(props," ==> I am a Prop");
    return (<h2> My name is {props.fullName}</h2>);
};

// const DisplayName = ({fullName}) =>{
//     return (<h2> My name is {fullName}</h2>);
// };

export default DisplayName ;