class Product {
    constructor (id, title, coast, price, quantity ) {
        this.id = parseInt(id);
        this.title = title;
        this.coast = parseFloat(coast),
        this.price = parseFloat(price),
        this.quantity = parseInt(quantity);
    }
    toString() {
        return this.id + ', ' + this.title + ', ' + this.price;
    }
}

// Firestore data converter
const productConverter = {
    toFirestore: (product) => {
        return {
            id: product.id,
            title: product.title,
            coast: product.coast,
            price: product.price,
            quantity: product.quantity
            };
    },
    fromFirestore: (snapshot, options) => {
        const data = snapshot.data(options);
        return new Product(data.id, data.title, data.coast, data.price, data.quantity);
    }
};

export {Product, productConverter};