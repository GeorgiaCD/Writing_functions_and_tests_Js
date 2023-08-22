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

  test('can divide two positive numbers', ()=>{
    expected = 10;
    actual = divide(20,2);
    expect(actual).toBe(expected);
  }); 

  test('can divide two negative numbers', ()=>{
    expected =  10 ;
    actual = divide(-20,-2);
    expect(actual).toBe(expected);
  }); 


  test('can divide one negative and one positive number', ()=>{
    expected = -10;
    actual = divide(-20,2);
    expect(actual).toBe(expected);
  }); 


  test('doesnt divide by 0', ()=>{
    expected = Infinity;
    actual = divide(10,0);
    expect(actual).toBe(expected);
  }); 

  test('can divide 0', ()=>{
    expected = 0;
    actual = divide(0,10);
    expect(actual).toBe(expected);
  }); 


});






// modulus 
describe('modulus', () => {

  test('can perform modulus', ()=>{
    expected = 2;
    actual = modulus(10,4);
    expect(actual).toBe(expected);
  }); 

  test('can perform modulus with factor', ()=>{
    expected = 0;
    actual = modulus(10,2);
    expect(actual).toBe(expected);
  }); 


});


// even 
describe('even', () => {

  test('can return true', ()=>{
    expected = true ;
    actual = even(10);
    expect(actual).toBe(expected);
  }); 

  test('can return false', ()=>{
    expected = false;
    actual = even(3);
    expect(actual).toBe(expected);
  }); 

  test('can 0 ', ()=>{
    expected = true;
    actual = even(0);
    expect(actual).toBe(expected);
  }); 



});


// odd 
describe('odd', () => {

});
