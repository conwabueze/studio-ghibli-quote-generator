import React from 'react';
import {Button} from 'reactstrap'
import {QUOTEINFO} from '../shared/quoteInfo';

class Quote extends React.Component{
    //constructor
    constructor(props){
        super(props);

        this.state={
            quoteInfo: []
        }
    }

    componentDidMount(){
        this.getQuote();
    };

    handleClick(){
        this.getQuote();
    };

    //method used to generate a new quote
    getQuote(){
        //varible generates random number from 1 to the length of state file
        const randomNumber = Math.floor((Math.random()*QUOTEINFO.length)+1);
       
        const quoteDetail = QUOTEINFO.map(quote=>{       
                if(quote.id===randomNumber){
                    this.setState({quoteInfo: quote});
                }
            }
        );
    }
    
    //render method
    render(){
        return(
            <div>
                <p>{this.state.quoteInfo.text}</p>
                <Button block onClick={this.getQuote.bind(this)}>CLICK FOR NEW QUOTE</Button>
            </div>
        );
    };
    
}




export default Quote;
