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
    expect(calculate(obj, 'AC')).toEqual(obj);
  });

  describe('When buttonName is a number', () => {
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
  });

  describe('When buttonName is .', () => {
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
      const result = calculate(obj, '.');
      expect(result.total).toEqual('1.');
    });

    test('button is . and obj.total is null', () => {
      obj.total = null;
      obj.operation = null;
      obj.next = null;
      const result = calculate(obj, '.');
      expect(result.total).toEqual('0.');
    });
  });

  describe('When buttonName is \'=\'', () => {
    test('when obj.next and obj.operation are not null, equals button returns', () => {
      obj.total = '2';
      obj.next = '3';
      obj.operation = '+';

      const result = calculate(obj, '=');

      expect(result.total).toBe('5');
    });

    test('when there is no obj.operation', () => {
      obj.operation = null;

      expect(calculate(obj, '=')).toEqual({});
    });
  });

  describe('When the buttonName is \'+/-\'', () => {
    test('if obj.next exists return the neg of obj.next', () => {
      obj.next = '3';
      const result = calculate(obj, '+/-');

      expect(result.next).toBe('-3');
    });

    test('if obj.total exists return the pos of obj.total', () => {
      obj.next = null;
      obj.total = '-3';

      const result = calculate(obj, '+/-');

      expect(result.total).toBe('3');
    });

    test('if there\'s no obj.next and obj.total, return {}', () => {
      obj.next = null;
      obj.total = null;

      expect(calculate(obj, '+/-')).toEqual({});
    });
  });
});
