import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render } from '@testing-library/react';
import Calculator from '../components/Calculator';

it('renders correctly', () => {
  const tree = renderer
    .create(<Calculator />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test('Buttons runs operations and updates the UI', () => {
  const component = render(<Calculator />);

  const outputBar = component.container.querySelector('.output-bar');
  expect(outputBar).toHaveTextContent('0');

  const btn9 = component.container.querySelector('.btn9');
  expect(btn9).toHaveTextContent('9');

  const sumButton = component.getByText('+');
  const equalButton = component.getByText('=');

  fireEvent.click(btn9);
  fireEvent.click(sumButton);
  fireEvent.click(btn9);
  fireEvent.click(equalButton);

  expect(outputBar).toHaveTextContent('18');
});
