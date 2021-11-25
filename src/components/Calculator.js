import React from 'react';
import './Calculator.css';
import Button from './Button';
import calculate from '../logic/calculate';

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

  buttonClick(buttonName) {
    this.setState((state) => ({
      data: calculate(state.data, buttonName),
    }));
  }

  render() {
    const { data } = this.state;
    const buttons = ['AC', '+/-', '%', '÷',
      '7', '8', '9', 'x',
      '4', '5', '6', '-',
      '1', '2', '3', '+',
      '0', '.', '='];

    return (
      <div className="Calculator">
        <div className="output-bar">
          {data.next || data.operation || data.total || '0'}
        </div>
        {
          buttons.map((btn) => (
            <Button
              key={btn.id}
              className={
                btn === '÷' || btn === 'x' || btn === '-' || btn === '+' || btn === '='
                  ? 'operation-btn'
                  : `btn${btn}`
              }
              data={data}
              buttonClick={() => this.buttonClick(btn)}
              name={btn}
            />
          ))
        }
      </div>
    );
  }
}

export default Calculator;
