import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Quote from './components/QuoteComponent';


class App extends React.Component{s
    //render method
    render(){
        return(
            <Quote />
        );
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'));