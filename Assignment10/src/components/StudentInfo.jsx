import React from "react";
const StudentInfo = (props) => {
    const data = Object.entries(props.data);
   return(
    <>
     {data.map((item,index)=>{
        return (<p key={index} className="m-2"><b>{item[0]}</b> : {item[1]}</p>);
    })}
    </>
   )
}
export default StudentInfo;