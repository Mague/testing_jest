const { carsList, brandList} = require('../src/array');

describe('Verifying existing cars',()=>{
    test('Tha the array is not null and void',()=>{
        expect(carsList()).not.toBeNull()
    })
    test('Verifying if contains an VW Golf',()=>{
        expect(carsList()).toContain('VW Golf GTI')
    })

    test('Check the length of the array',()=>{
        expect(carsList()).toHaveLength(4)
    })
})

describe('Verifying existing brands',()=>{
    test('That the array is not null',()=>{
        expect(brandList()).not.toBeNull()
    })
})