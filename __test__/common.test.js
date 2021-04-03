test('5 + 5 is 10',()=>{
    expect(5+5).toBe(10)
})

test('object validation',()=>{
    const data = {
        username:'mague'
    }
    const data2 = {
        username:'ps5'
    }
    expect(data).toEqual({username:"mague"})
    expect(data).not.toEqual(data2)
})