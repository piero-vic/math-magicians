import calculate from '../logic/calculate';

describe('Calculate', () => {
  const obj = {
    total: null,
    next: null,
    operation: null,
  };

  test('Function returns an object', () => {
    expect(typeof (calculate(obj, 'AC'))).toBe('object');
  });

  test('AC button', () => {
    expect(calculate(obj, 'AC')).toEqual({
      total: null,
      next: null,
      operation: null,
    });
  });

  test('If buttonName and obj.next == 0 return {}', () => {
    obj.next = '0';
    expect(calculate(obj, '0')).toEqual({});
  });

  test('if operation and next exists, then buttonName is appended to obj.next', () => {
    obj.operation = '+';
    obj.next = '6';
    const result = calculate(obj, '3');
    expect(result.next).toBe('63');
  });

  test('if operation is null, return total to be null', () => {
    obj.operation = null;
    obj.next = '6';
    const result = calculate(obj, '3');

    expect(result.next).toBe('63');
    expect(result.total).toBeNull();
  });

  test('if no operation, and obj.next, but button is a number, return the number', () => {
    obj.operation = null;
    obj.next = null;
    const result = calculate(obj, '3');

    expect(result.next).toBe('3');
    expect(result.total).toBeNull();
  });

  test('button is . and obj.next', () => {
    obj.next = '2.2';
    const result = calculate(obj, '.');
    expect(result.next).toBe('2.2');
  });

  test('button is . and obj.operation', () => {
    obj.operation = '+';
    obj.next = null;
    const result = calculate(obj, '.');
    expect(result.next).toBe('0.');
  });

  test('button is . and obj.total includes . ', () => {
    obj.total = '1.5';
    obj.operation = null;
    obj.next = null;
    expect(calculate(obj, '.')).toEqual({});
  });

  test('button is . and obj.total does not includes . ', () => {
    obj.total = '1';
    obj.operation = null;
    obj.next = null;
    const result = calculate(obj, '.')
    expect(result.total).toEqual('1.');
  });

  test('button is . and obj.total is null', () => {
    obj.total = null;
    obj.operation = null;
    obj.next = null;
    const result = calculate(obj, '.')
    expect(result.total).toEqual('0.');
  });
});
