import {add,divide,sub,multi} from './calculator';



test('Add 2 +2 ', () => {
  expect(add(2,2)).toBe(4);
});

test('subtract 5 and 2', () => {
    expect(sub(5,2)).toBe(3);
  });

  
  test('multiply 5 and 4', () => {
    expect(multi(5,4)).toBe(20);
  });

  
  test('divide 100 by 5', () => {
    expect(divide(100,5)).toBe(20);
  });
  

