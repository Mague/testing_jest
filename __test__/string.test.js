describe('email validation',()=>{
    test('this is an email',()=>{
        const email = "info@gmail.com"
        expect(email).toMatch(/\S+@\S+\.\S+/)
    })
    test('this is not an email',()=>{
        const email = "infogmail.com"
        expect(email).not.toMatch(/\S+@\S+\.\S+/)
    })
})