const giftsCities = [12, 3, 11, 5, 7];
const maxGifts = 20;
const maxCities = 3;

function getMaxGifts(giftsCities, maxGifts, maxCities) {
    let arrayPush = [0];

    const sortGift = giftsCities.sort((a, b) => b - a);
    console.log('%creto5copy.js line:9 sortGift', 'color: #007acc;', sortGift);

    giftsCities.map((gift) => {
        if (gift <= maxGifts) {
            arrayPush.push(gift);

            const suma = arrayPush.reduce((a, b) => a + b);

            if (suma > maxGifts) {
                arrayPush.pop();
            }
        } 
    })

    const giftToDeliver = arrayPush.slice(1, maxCities + 1).reduce((a, b) => a + b);

    console.log('%creto5copy.js line:22 giftToDeliver', 'color: #007acc;', giftToDeliver);

    return giftToDeliver;
}

getMaxGifts(giftsCities, maxGifts, maxCities);










// if (suma <= maxGifts) {
            //     console.log("pasa");
            // } else {
            //     console.log("no pasa");
            //     arrayPush.pop();
            //     console.log('%creto5.js line:29 arrayPush', 'color: #007acc;', arrayPush);
            // }



// const array1 = [1, 2, 3, 4];

// let suma = 0;

// const result = array1.reduce((valorAnterior, valorActual, indice) => {
//     if()
//    return valorAnterior + valorActual;
// });

// console.log('%creto5.js line:12 result', 'color: #007acc;', result);

// 0 + 1 + 2 + 3 + 4
// const initialValue = 0;
// // const sumWithInitial = array1.reduce(
// //     (accumulator, currentValue) => accumulator + currentValue,
// //     initialValue

// //     if (initialValue <= maxGifts) {
        
// //     }
// // );
// const sumWithInitial = array1.reduce((accumulator, currentValue) => {
//     if (initialValue <= maxGifts) {
//         accumulator + currentValue
//     }
//     console.log('%creto5.js line:22 initialValue', 'color: #007acc;', initialValue);
//     return initialValue;
// });

// console.log(sumWithInitial);
// expected output: 10

// const giftToDeliver = giftsCities.filter((gift) =>  gift <= maxGifts);
// console.log('%creto5.js line:6 giftToDeliver', 'color: #007acc;', giftToDeliver);

// let total = 0;

// const a = [];

// for (let i = 0; i <= giftToDeliver.length - 1; i++) {

//     total += giftToDeliver[i]
// };
// console.log(total);

//1. Tomar el primer elemento del array giftCities y revisar con si este # es un valor menor o igual maxGift.

//2. si es asi crear un nuevo arreglo

//3. revisar en este nuevo arreglo si el numero de elementos es menor a maxCities


// if (giftsCities[0] + giftsCities[2] <= maxGifts) 



// let array1 = []

// const giftToDeliver = giftsCities.filter(gift => {
    
// });

// array1 + giftToDeliver

// giftsCities.map((gift) => {




//     if (gift <= maxCities) {
        
//     }
// })

// let giftToDeliver = [];

// giftsCities.map((item) => {
//     console.log('%creto5.js line:8 item', 'color: #007acc;', item);
//     if (item <= maxCities) {
//         giftToDeliver.push(item);
//         console.log('%creto5.js line:10 giftToDeliver', 'color: #007acc;', giftToDeliver);
//     }
// })
