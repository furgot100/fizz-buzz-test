const fb = require('../fizzbuzz')

test('Test isFizzy', () => {
    expect(fb.FIZZ).toBe('fizz')
    expect(fb.BUZZ).toBe('buzz')
    expect(fb.FIZZBUZZ).toBe('fizzbuzz')
})

test('Fizzy Test', () => {
    expect(fb.isFizzy(6)).toBe(true)
    expect(fb.isFizzy(-12)).toBe(true)
    expect(fb.isFizzy(4)).toBe(false)
    expect(fb.isFizzy(12.12)).toBe(false)
})

test('Buzzy Test', () => {
    expect(fb.isBuzzy(5)).toBe(true)
    expect(fb.isBuzzy(-10)).toBe(true)
    expect(fb.isBuzzy(3)).toBe(false)
    expect(fb.isBuzzy(12.05)).toBe(false)
})

test('FizzyBuzz Test', () => {
    expect(fb.fizzyBuzzy(15)).toBe('fizzbuzz')
    expect(fb.fizzyBuzzy(-12)).toBe('fizz')
    expect(fb.fizzyBuzzy(10)).toBe('buzz')
    expect(fb.fizzyBuzzy(12.12)).toBe('')
})

test('FizzyBuzz Test', () => {
    expect(fb.fizzBuzz(15)).toStrictEqual({"buzz": 2,"count": 15,"fizz": 4,"fizzBuzz": 1})
    expect(fb.fizzBuzz(4)).toStrictEqual({"buzz": 0, "count": 4, "fizz": 1, "fizzBuzz": 0})
    expect(fb.fizzBuzz(-15)).toStrictEqual({"buzz": 0, "count": -15, "fizz": 0, "fizzBuzz": 0})
})



