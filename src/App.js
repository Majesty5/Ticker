import React, {Component} from 'react';

class Ticker extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    }
  }
    componentDidMount() {
      setInterval (() =>{
        this.setState({
          count: this.state.count +1
        })
      }, 1000)
    };

    
  render() {
    return (
        <div><center><h1> Current Status of the Ticker: <span>{this.state.count} </span></h1></center>
        <center> <button onClick={() =>this.setState({count:0})} type="button">Reset Count</button></center>
        </div>




    );
  }

}



export default Ticker;
