const { sum, multiply, divide } = require('./02-math');

describe('Test suite for math operations', () => {
  describe('test for Sum', () => {
    test('should add 2 + 2 to equal 4', () => {
      const rta = sum(2, 2);
      expect(rta).toBe(4);
    });
  });
  describe('Test case for multiply', () => {
    test('should multiply 3 * 4 to equal 12', () => {
      const rta = multiply(3, 4);
      expect(rta).toBe(12);
    });
  });
  describe('test cases for divide', () => {
    test('should divide 9 / 3 to equal 3', () => {
      const rta = divide(9, 3);
      expect(rta).toBe(3);
    });
    test('should divide for zero to null', () => {
      const rta = divide(2, 0);
      expect(rta).toBeNull();
    });
  });
});
