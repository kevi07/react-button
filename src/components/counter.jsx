import React, { Component } from 'react';


class Counter extends Component {
    // state = {
    //     value : this.props.counter.value
    // }

    // constructor(){
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this);
    // }

    // styles = {
    //     fontSize:20,
    //     fontWeight:"bold"
    // };

    // handleIncrement = () => {
    //     this.setState({value : this.state.value+1})
    // }
    

    
    render() { 
        // console.log("props",this.props)
        return (
            <div>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button 
                 onClick={()=> this.props.onIncrement(this.props.counter)}
                 className="btn btn-secondary btn-sm"
                >Increment</button>
                <button 
                onClick={() => this.props.onDelete(this.props.counter.id)} 
                className="btn btn-danger btn-sm m-2">
                    Delete
                </button>
                
            </div>
    
        );
    }
    getBadgeClasses() {
        let classes = "badge m-2 bg-";
        classes += (this.props.counter.value === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        return this.props.counter.value === 0 ? "Zero" : this.props.counter.value 
    }
}
 
export default Counter;