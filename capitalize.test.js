import capitalize from './capitalize';



test('First Letter is Capital', () => {
  expect(capitalize("first")).toBe("First");
});