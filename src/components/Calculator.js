import React from 'react';
import './Calculator.css';
import Button from './Button';

// eslint-disable-next-line react/prefer-stateless-function
class Calculator extends React.Component {
  render() {
    return (
      <div className="Calculator">
        <div className="output-bar">
          0
        </div>
        <Button name="AC" />
        <Button name="+/-" />
        <Button name="%" />
        <Button className="operation-btn" name="÷" />
        <Button name="7" />
        <Button name="8" />
        <Button name="9" />
        <Button className="operation-btn" name="x" />
        <Button name="4" />
        <Button name="5" />
        <Button name="6" />
        <Button className="operation-btn" name="-" />
        <Button name="1" />
        <Button name="2" />
        <Button name="3" />
        <Button className="operation-btn" name="+" />
        <Button className="two-col" name="0" />
        <Button name="." />
        <Button className="operation-btn" name="=" />
      </div>
    );
  }
}

export default Calculator;
