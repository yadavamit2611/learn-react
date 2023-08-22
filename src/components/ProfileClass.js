import React from "react";
class Profilef extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count: 0,
            count2: 1,
        };
    }

    render(){
        const { count } = this.state;
        return (<div>
            this is coming from {this.props.name} {this.props.xyz}
            <p>count : {this.state.count}</p>
            <p>count2 : {this.state.count2}</p>
            <button onClick={() => 
                this.setState({
                    count : count + 1
                })
            }>Set Count</button>
        </div>);
    }
}

export default Profilef