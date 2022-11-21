const Person = require('./06-person');

describe('test for Person IMC', () => {
  let person;

  beforeEach(() => {
    person = new Person('Daniel', 45, 1.7);
  });

  test('should return DOWN value of IMC', () => {
    const imc = person.calcIMC();
    expect(imc).toBe('down');
  });

  test('should return NORMAL value of IMC', () => {
    person.weight = 59;
    const imc = person.calcIMC();
    expect(imc).toBe('normal');
  });
});
