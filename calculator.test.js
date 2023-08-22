const {
  sum,
  subtract,
  multiply,
  divide,
  modulus,
  even,
  odd,
} = require("./calculator");

// sum
describe('sum', () => { 
  
  test('can add two small positive numbers', () => {
    expected = 5;
    actual = sum(2, 3);
    expect(actual).toBe(expected);
  });

  test('can add two large positive numbers', () => { 
    expected = 1234456;
    actual = sum(1222111,12345);
    expect(actual).toBe(expected);
  });

  test('can add two negative numbers', () => {
    expected = -5;
    actual = sum(-2,-3);
    expect(actual).toBe(expected);
    
  });

  test('can add zero', () => {
    expected = 1234456;
    actual = sum(1234456,0);
    expect(actual).toBe(expected);
  });

});


// subtract
describe('subtract', () => {

  test('can substract two small positive numbers', ()=>{
        expected = 10;
        actual = subtract(15,5);
        expect(actual).toBe(expected);
  });

  test('can substract two large positive numbers', ()=>{
        expected = 12345
        actual = subtract(12456,111)
        expect(actual).toBe(expected);
  });

  test('can substract two negative numbers', ()=>{
    expected = -5;
    actual = subtract(-10,-5);
    expect(actual).toBe(expected);

  });

  test('can substract zero', ()=>{
    expected = 10;
    actual = subtract(10,0);
    expect(actual).toBe(expected);

  });


});

// multiply 

describe('multiply', () => {


  test('can multiply two positive numbers', ()=>{
    expected = 10;
    actual = multiply(2,5);
    expect(actual).toBe(expected);

  });

  test('can multiply two negative numbers', ()=>{
    expected = 10
    actual = multiply(-2,-5)
    expect(actual).toBe(expected);

  });

  test('can multiply one negative number', ()=>{
    expected = -10;
    actual = multiply(-2,5);
    expect(actual).toBe(expected);

  });

  test('can multiply 0', ()=>{
    expected = 0;
    actual = multiply(10,0);
    expect(actual).toBe(expected);

  });



});




// divide 
describe('divide', () => {

  test('', ()=>{
    expected = ;
    actual = divide(a,b);
    expect(actual).toBe(expected);


});






// modulus 
describe('modulus', () => {

});


// even 
describe('even', () => {

});


// odd 
describe('odd', () => {

});
