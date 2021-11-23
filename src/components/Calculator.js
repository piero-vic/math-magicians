import './Calculator.css';

function Calculator() {
  return (
    <div className="Calculator">
      <div className="output-bar">
        0
      </div>
      <button type="button">AC</button>
      <button type="button">+/-</button>
      <button type="button">%</button>
      <button className="operation-btn" type="button">÷</button>
      <button type="button">7</button>
      <button type="button">8</button>
      <button type="button">9</button>
      <button className="operation-btn" type="button">x</button>
      <button type="button">4</button>
      <button type="button">5</button>
      <button type="button">6</button>
      <button className="operation-btn" type="button">-</button>
      <button type="button">1</button>
      <button type="button">2</button>
      <button type="button">3</button>
      <button className="operation-btn" type="button">+</button>
      <button className="two-col" type="button">0</button>
      <button type="button">.</button>
      <button className="operation-btn" type="button">=</button>
    </div>
  );
}

export default Calculator;
