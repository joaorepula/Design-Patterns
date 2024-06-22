/*
    ProductId: should be between 2 and 20 characters
    Name: should be only words
    Price: should be from zero to a thousand
*/

function productValidator(product){
    const errors = [];

    if(!(product.id.length >= 2 && product.id <= 20)){
        errors.push(`id: invalid lenght, current [${product.id}] expected to be between 2 and 20`)
    }

    if (!/^[a-zA-Z]+$/.test(product.name)) {
        errors.push(`name: invalid value, current [${product.name}] expected to have only words`);
    }

    if(product.price > 1000 || product.id === 0){
        errors.push(`price: invalid price, current [${product.price}] expected to be between 1 and 1000`)
    }

    return {
        result: errors.length === 0,
        errors
    }
}

module.exports = {
    productValidator
}