import React from 'react';
import './App.css';


function isPrime(n) {
  if(n < 2){
    return "Is not Prime"
  }
  if (n % 2 == 0 && n > 2) {
    return "Is not Prime"
  }else{
    for (let i = 2; i < n; i++) {
      if( n % i == 0){
        return "Is not Prime"
      }
    }
  }
  return "Is Prime"
}

const ListPrimes = (props) =>{
  console.log(props.n)
  return(
    <h1>
      {props.n.toString().length < 7 ? <div>{isPrime(props.n)}</div> : <div>Número muy largo</div>}
    </h1>
  )
}

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      n: 2,
    }

    this.handleChange = this.handleChange.bind(this); 
  }

  handleChange(e){
    this.setState({
      n: e.target.value
    })    

  }

  render(){
    return (
      <div className="App">
        <div id="container">
          <input type="number" value={this.state.n} onChange={e => this.handleChange(e)} style={{transitionProperty: "width", transitionDuration:"2s"}}/>
          <ListPrimes n = {this.state.n} />
        </div>
      </div>
    )
  }
}

export default App;
