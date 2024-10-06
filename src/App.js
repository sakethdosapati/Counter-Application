import React,{Component} from "react";
import "./App.css";

class Counter extends Component{
    constructor(props){
        super(props)
        this.state = {
            count : 0,
        };
    }
    inc = ()=>{
        this.setState({count : this.state.count+1});
    }
    dec = ()=>{
        this.setState({count : this.state.count-1})
    }
    reset = ()=>{
        this.setState({count : 0})
    }
    render(){
        return(
           <>
           <h1 style={{textAlign:"center",fontSize:"100px"}}>
            Counter App
           </h1>
             <div id="main">
                <div id="sub-div1">
                    <button onClick={this.inc}>+</button>
                    <h2>{this.state.count}</h2>
                    <button onClick={this.dec}>-</button>
                </div>
                <div id="sub-div2">
                    <button onClick={this.reset}>reset</button>
                </div>
            </div>  
           </>
        )
    }
}
export default Counter;