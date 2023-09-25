
class Sale {
    constructor (id, clientName, date, value, paymentMethod, itens=[] ) {
        this.id = id;
        this.clientName = clientName;
        this.date = date,
        this.value = parseFloat(value),
        this.paymentMethod = paymentMethod;
        this.itens = itens;
    }
    toString() {
        return this.clientName + ', ' + this.clientName + ', ' + this.value;
    }
}

// Firestore data converter
const saleConverter = {
    toFirestore: (sale) => {
        return {
            clientName: sale.clientName,
            date: sale.date,
            value: sale.value,
            paymentMethod: sale.paymentMethod,
            itens: sale.itens
            };
    },
    fromFirestore: (snapshot, options) => {
        const data = snapshot.data(options);
        return new Sale(snapshot.id,data.clientName, new Date(data.date).toLocaleDateString("pt-BR"), data.value, data.paymentMethod, data.itens);
    }
};

export {Sale, saleConverter};