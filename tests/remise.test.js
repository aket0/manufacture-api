const { appliquerRemise } = require('../src/remise');

test('10 % de remise sur 100 euros donnent 90 euros', () => {
  expect(appliquerRemise(100, 10)).toBe(90);
});

test('une remise de plus de 100 % est refusee', () => {
  expect(() => appliquerRemise(100, 150))
    .toThrow('Remise invalide');
});

test('une remise negative est refusee', () => {
  expect(() => appliquerRemise(100, -10))
    .toThrow('Remise invalide');
});

test('100 % de remise donnent un prix nul', () => {
  expect(appliquerRemise(100, 100)).toBe(0);
});
