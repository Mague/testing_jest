const sum = require('../src/sum')

describe('test sum',()=>{
    test('5 + 5 is 3',()=>{
        expect(sum(5,5)).toBe(10)
    })
    
    it('should return 10  whith 5 + 5',()=>{
        expect(sum(5,5)).toBe(10)
    })

    test('1 + -2 is -1',()=>{
        expect(sum(1,-2)).toBe(-1)
    })

    test("-1 + -2 is -3",()=>{
        expect(sum(-1,-2)).toBe(-3)
    })
})