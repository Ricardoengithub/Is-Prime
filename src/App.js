import React from 'react';
import { FaTimesCircle, FaCheckCircle } from 'react-icons/fa';
import './App.css';


function isPrime(n) {
  if(n < 2){
    return <div>No es primo <FaTimesCircle id="fail"/></div>
  }
  if (n % 2 === 0 && n > 2) {
    return <div>Es primo <FaTimesCircle id="fail"/></div>
  }else{
    for (let i = 2; i < n; i++) {
      if( n % i === 0){
        return <div>No es primo <FaTimesCircle id="fail"/></div>
      }
    }
  }
  return <div>Es primo <FaCheckCircle id="success"/></div>
}

function factorial(f) {
  // eslint-disable-next-line
  if(f == 1 || f == 0){
    return 1
  }
  if(f < 0){
    return "Error"
  }
  return f * factorial(f-1) 
}

function fibonacci(b) {
  // eslint-disable-next-line
  if(b == 0){
    return 0
  }
  // eslint-disable-next-line
  if(b == 1){
    return 1
  }
  return fibonacci(b-1) + fibonacci(b-2)

}

const IsPrime = (props) =>{
  return(
    <h1>
      {props.n.toString().length < 7 ? isPrime(props.n) : <div>Number too long <FaTimesCircle id="fail"/></div>}
    </h1>
  )
}

const Factorial = (props) =>{
  return(
    <h1>
      {props.f.toString().length < 7 ? <div>El factorial de {props.f} es: {factorial(props.f)}</div> : <div>Number too long <FaTimesCircle id="fail"/></div>}
    </h1>
  )
}

const Fibonnaci = (props) =>{
  return(
    <h1>
      {props.b.toString().length < 7 ? <div>Fibonnaci de {props.b} es: {fibonacci(props.b)}</div> : <div>Number too long <FaTimesCircle id="fail"/></div>}
    </h1>
  )
}



class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      n: 2,
      f: 0,
      b: 0
    }

    this.handlePrimes = this.handlePrimes.bind(this);
    this.handleFactorial = this.handleFactorial.bind(this); 
    this.handleFibonacci = this.handleFibonacci.bind(this);
  }

  handlePrimes(e){
    this.setState({
      n: e.target.value
    })    
  }

  handleFactorial(e){
    this.setState({
      f: e.target.value
    })
  }

  handleFibonacci(e){
    this.setState({
      b: e.target.value
    })
  }

  render(){
    return (
      <div className="App">
        <div id="primes">
          <input type="number" value={this.state.n} onChange={e => this.handlePrimes(e)} style={{transitionProperty: "width", transitionDuration:"2s"}}/>
          <IsPrime n = {this.state.n} />
        </div>
        <div id="factorial">
          <input type="number" value={this.state.f} onChange={e => this.handleFactorial(e)} style={{transitionProperty: "width", transitionDuration:"2s"}}/>
          <Factorial f = {this.state.f} />
        </div>
        <div id="fibonacci">
          <input type="number" value={this.state.b} onChange={e => this.handleFibonacci(e)} style={{transitionProperty: "width", transitionDuration:"2s"}}/>
          <Fibonnaci b = {this.state.b} />
        </div>
      </div>
    )
  }
}

export default App;
