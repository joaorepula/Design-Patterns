const { expect } = require('chai')
const { it, describe } = require('mocha')
const { productValidator } = require('../src')
const ProductMotherObject = require('./models/productMotherObject')
describe('Test Mother objec', () => {
    it('should return error with valid product', () => {
        const product = ProductMotherObject.valid()
        const result = productValidator(product)

        const expected = {
            errors: [],
            result: true
        }

        expect(result).to.be.deep.equal(expected)
    })

    describe('Product Validation Rules', () => {
        it('should return an object error when creating a Product with invalid id', () => {
            const product = ProductMotherObject.withInvalidId()
            
            const result = productValidator(product)
    
            const expected = {
                errors: [
                   "id: invalid lenght, current [1] expected to be between 2 and 20"
            ],
                result: false
            }
            expect(result).to.be.deep.equal(expected)
        })
        it('should return an object error when creating a Product with invalid name', () => {
            const product = ProductMotherObject.withInvalidName()
            
            const result = productValidator(product)
    
            const expected = {
                errors: [
                   "name: invalid value, current [123] expected to have only words"
            ],
                result: false
            }
            expect(result).to.be.deep.equal(expected)
        })
        it('should return an object error when creating a Product with invalid price', () => {
            const product = ProductMotherObject.withInvalidPrice()
            
            const result = productValidator(product)
            const expected = {
                errors: [
                   "price: invalid price, current [20000] expected to be between 1 and 1000"
            ],
                result: false
            }
            expect(result).to.be.deep.equal(expected)
        })
    })
})

