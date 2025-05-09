const {sum, sub, mul, divide, pow} = require('../src/math');

test('add 1 + 1 to equal 2', ()=>{
    expect(sum(1,1)).toBe(2);
});

test('sub 1 - 1 to equal 0', ()=>{
    expect(sub(1,1)).toBe(0);
});

test('mul 1 * 1 to equal 1', ()=>{
    expect(mul(1,1)).toBe(1);
});

test('divide 1 / 2 to equal 0.5', ()=>{
    expect(divide(1,2)).toBe(0.5);
});

test('1^2 to equal 1', ()=>{
    expect(pow(1,2)).toBe(1);
});

test('0^2 to equal 0', ()=>{
    expect(pow(0,2)).toBe(0);
});

test('2^2 to equal 4', ()=>{
    expect(pow(2,2)).toBe(4);
});
