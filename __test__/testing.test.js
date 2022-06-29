const { sum, cats } = require('../src/testing');

describe('Math Suit #1', () => {

  test('Sum of two numbers', () => {
    expect(sum(1, 2)).toBe(3);
  });

  test('Postive sum result', () => {
    expect(sum(1, 2)).toBeGreaterThan(0);
    expect(sum(0, 0)).toBe(0);
    expect(sum(-1, -1)).toBeLessThan(0);
  });

});

describe('String content #1', () => {
  test('Gabit has vowels', () => {
    expect("Gabit").toMatch(/[aeiou]+/);
  });
});


describe('Array Suit #1', () => {
  
  test('Array defined', () => {
    expect(cats()).not.toBeNull();
  });
  
  test('Fígaro exists', () => {
    expect(cats()).toContain('Fígaro');
  });
  
  test('Five cats', () => {
    expect(cats()).toHaveLength(5);
  })
});
