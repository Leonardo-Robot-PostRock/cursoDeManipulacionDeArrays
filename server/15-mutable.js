const products = [
    { title: "Pizza", price: 121, id: "🍕" },
    { title: "Burger", price: 121, id: "🍔" },
    { title: "Hot cakes", price: 121, id: "🥞" }
]

const myProducts = [];
console.log("products", products); //Estado inicial
console.log("myProducts", myProducts); //Sin productos o carro de compras
console.log("-".repeat(10));

// const productIndex0 = products.findIndex(item => item.id === '🍔');
// console.log(productIndex);

// if (productIndex !== -1) {//findIndex devuelve -1 si no encuentra el elemento y si lo encuentra devuelve el indice del elemento. Método inmutable
//     myProducts.push(products[productIndex0]); //Añadimos el producto al carro de compras. Método mutable
//     products.splice(productIndex, 1) //Posición y numero de elementos a eliminar. Método mutable
// }
// console.log("products", products); //Estado inicial
// console.log("myProducts", myProducts); //Sin productos o carro de compras
// console.log("-".repeat(10));

/*RETO 1 eliminar un producto sin modificar al array original*/
const productIndex1 = products.findIndex(item => item.id === '🍕');
console.log('productIndex2', productIndex2);
let filteredArray = [];
if (productIndex2 !== -1) {
    myProducts.push(products[productIndex2]);
    filteredArray = products.filter((item, index) => index !== productIndex2)
}
console.log('filteredArray', filteredArray);
console.log("products", products); //Estado inicial
console.log("myProducts", myProducts); //Sin productos o carro de compras
console.log("-".repeat(10));

/*Update*/

const productsV2 = [
    { title: "Pizza", price: 121, id: "🍕" },
    { title: "Burger", price: 121, id: '🍔' },
    { title: "Hot cakes", price: 121, id: '🥞' },
];

const update = {
    id: '🥞',
    changes: {
        price: 200,
        description: "delicioso",
    },
}

const productIndex2 = productsV2.findIndex(item => item.id === update.id);
productsV2[productIndex2] = { ...productsV2[productIndex2], ...update.changes };
console.log(productsV2);

/*RETO 2 Modificar el elemento sin modificar el array*/
const productsV3 = [
    { title: "Pizza", price: 120, id: "🍕" },
    { title: "Burger", price: 80, id: '🍔' },
    { title: "Hot cakes", price: 140, id: '🥞' },
];

const updateV2 = {
    id: '🍕',
    changes: {
        price: 200,
        description: "Una cagada de pizza",
    },
}

const productIndex3 = productsV3.findIndex(item => item.id === updateV2.id);
const productUpdate = [...productsV3]; //No copia la referencia del array
productUpdate[productIndex3] = { ...productsV3[productIndex3], ...updateV2.changes }
console.log("Orinal product", productsV3);
console.log('Product update', productUpdate);

/*Otra solución más simple*/
const productIndex4 = productsV3.map(item => {
    if (item.id === updateV2.id) {
        return {
            ...item,
            ...updateV2.changes,
        }
    }
    return { ...item };
})
console.log('-'.repeat(10));
console.log("Original product", productsV3);
console.log('Product update', productIndex4);