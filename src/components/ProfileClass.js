import React from "react";
// class components have lifecycle 1. constructor the 2. component render 3. component did mount is called
class Profilef extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count: 0,
            count2: 1,
        };
        console.log("child constructor");
    }

    componentDidMount(){
        // this will be called after render
        // best place to make an api call
        // there are lot more life cycle
        console.log("child component did mount");
    }

    render(){
        console.log("child render");
        const { count,count2 } = this.state;
        return (<div>
            this is coming from {this.props.name} {this.props.xyz}
            <p>count : {this.state.count}</p>
            <p>count2 : {this.state.count2}</p>
            <button onClick={() => 
                this.setState({
                    count : count + 1,
                    count2: count2 + 1
                })
            }>Set Count</button>
        </div>);
    }
}

export default Profilef