import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render } from '@testing-library/react';
import Button from '../components/Button';

const mockHandler = jest.fn();

it('renders correctly', () => {
  const tree = renderer
    .create(<Button name="=" buttonClick={mockHandler} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test('render content', () => {
  let buttonName = '+';
  let component = render(<Button name={buttonName} buttonClick={mockHandler} />);
  expect(component.container).toHaveTextContent('+');

  buttonName = '-';
  component = render(<Button name={buttonName} buttonClick={mockHandler} />);
  expect(component.container).toHaveTextContent('-');
});

test('click the button calls event handler', () => {
  const buttonName = '+';

  const component = render(<Button name={buttonName} buttonClick={mockHandler} />);
  const button = component.getByText('+');
  fireEvent.click(button);

  expect(mockHandler).toHaveBeenCalledTimes(1);
});
