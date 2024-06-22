const Product = require("../../src/entities/product");

class ProductDataBuilder {
    constructor(){
        this.productData = {
            id:'000001',
            name:'computer',
            price:1000,
        }
    }

    static aProduct(){
        return new ProductDataBuilder()
    }

    withInvalidId(){
        this.productData.id = '1';
        return this
    }

    withInvalidName(){
        this.productData.name = '123';
        return this
    }
    withInvalidPrice(){
        this.productData.price = 20000;
        return this
    }
    build(){
        const product = new Product(this.productData)
        return product
    }
}

module.exports = ProductDataBuilder