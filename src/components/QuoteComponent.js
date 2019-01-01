import React from 'react';
import {Button} from 'reactstrap'

class Quote extends React.Component{
    //constructor
    constructor(props){
        super(props);
    }
    
    //render method
    render(){
        return(
            <div>{this.props.text}</div>
            
        );
    };
    
}




export default Quote;
