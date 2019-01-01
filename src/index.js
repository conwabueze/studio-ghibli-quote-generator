import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {QUOTEINFO} from './shared/quoteInfo';
import Quote from './components/QuoteComponent';


class App extends React.Component{
    //constructor
    constructor(props){
        super(props);

        this.state = {
            quotes: QUOTEINFO,
            
        };
    }

    //method used to get details and returns quote to be rendered in render method
    getQuote(){
        //varible generates random number from 1 to the length of state file
        const randomNumber = Math.floor((Math.random()*this.state.quotes.length)+1);
       
        /*
         const target = (number) =>{
            return number === this.state.quotes.id;
        }
        first attempt using filter method
        const quoteDetail = this.state.quotes.filter(() =>{
            console.log(this.state.quotes.quote);
            return randomNumber === this.state.quotes.id;
        })[0];

        console.log(quoteDetail);
        */
        const quoteDetail = this.state.quotes.map(quote=>{
            
                if(quote.id===randomNumber){
                    return(
                        <Quote text={quote.text}/>
                    );
                    
                }
            }
        );

      
        
    }

    //render method
    render(){
    
        return(
            
            <div>{this.getQuote()}</div>
        );
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'));