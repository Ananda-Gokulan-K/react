import React from "react";
import "../../css/propComp.css"
function TestpropComp(object){
    return(
        <div style={{backgroundColor:"blue"}}>who {object.name} i {object.general}</div>
    )
}
export default TestpropComp;