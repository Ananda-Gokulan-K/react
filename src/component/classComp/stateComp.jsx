import React, {Component} from "react";
import "../../css/propComp.css"


class TeststateComp extends Component{
    constructor(){
        super()
        this.state={name:"anand",std:"ECE"}
    }
    changeState = () =>{
        console.log("KEC")
    }
    render(){
        return(
            <div>
            <h1>iam {this.state.name} , from {this.state.std} dept</h1> 
            <h1>lets change the state {this.state.name} to {this.changeState}</h1>
            <button onMouseOver={this.changeState}>try me</button></div>
        )
        }

}
export default TeststateComp;