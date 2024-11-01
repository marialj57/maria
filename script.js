const express = require('express');

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    getName() {
        return this.name;
    }

    getPrice() {
        return this.price;
    }
}

const app = express();
const port = 3000;

const products = [
    new Product("Camiseta Básica", 50.0),
    new Product("Calça Jeans", 120.0)
];

app.get('/products', (req, res) => {
    res.json(products.map(product => ({
        name: product.getName(),
        price: product.getPrice()
    })));
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
