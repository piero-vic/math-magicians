import React from 'react';
import './Calculator.css';
import calculate from '../logic/calculate';

// eslint-disable-next-line react/prefer-stateless-function
class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        total: null,
        next: null,
        operation: null,
      },
    };
    this.buttonClick = this.buttonClick.bind(this);
  }

  buttonClick(e) {
    this.setState((state) => ({
      data: calculate(state.data, e.target.name),
    }));
  }

  render() {
    const { data } = this.state;
    return (
      <div className="Calculator">
        <div className="output-bar">
          {data.next || data.operation || data.total || '0'}
        </div>
        <button onClick={(e) => this.buttonClick(e)} name="AC" type="button">AC</button>
        <button onClick={(e) => this.buttonClick(e)} name="+/-" type="button">+/-</button>
        <button onClick={(e) => this.buttonClick(e)} name="%" type="button">%</button>
        <button onClick={(e) => this.buttonClick(e)} className="operation-btn" name="÷" type="button">÷</button>
        <button onClick={(e) => this.buttonClick(e)} name="7" type="button">7</button>
        <button onClick={(e) => this.buttonClick(e)} name="8" type="button">8</button>
        <button onClick={(e) => this.buttonClick(e)} name="9" type="button">9</button>
        <button onClick={(e) => this.buttonClick(e)} className="operation-btn" name="x" type="button">x</button>
        <button onClick={(e) => this.buttonClick(e)} name="4" type="button">4</button>
        <button onClick={(e) => this.buttonClick(e)} name="5" type="button">5</button>
        <button onClick={(e) => this.buttonClick(e)} name="6" type="button">6</button>
        <button onClick={(e) => this.buttonClick(e)} className="operation-btn" name="-" type="button">-</button>
        <button onClick={(e) => this.buttonClick(e)} name="1" type="button">1</button>
        <button onClick={(e) => this.buttonClick(e)} name="2" type="button">2</button>
        <button onClick={(e) => this.buttonClick(e)} name="3" type="button">3</button>
        <button onClick={(e) => this.buttonClick(e)} className="operation-btn" name="+" type="button">+</button>
        <button onClick={(e) => this.buttonClick(e)} className="two-col" name="0" type="button">0</button>
        <button onClick={(e) => this.buttonClick(e)} name="." type="button">.</button>
        <button onClick={(e) => this.buttonClick(e)} className="operation-btn" name="=" type="button">=</button>
      </div>
    );
  }
}

export default Calculator;
