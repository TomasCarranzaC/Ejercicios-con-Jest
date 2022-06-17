// esta es mi función que suma dos números
//const sum = (a,b) => {
//    return a + b
//}

// solo un registro en consola para nosotros.
//console.log(sum(7,3))

// exporta la función para usarla en otros archivos 
// (similar a la palabra clave `export` cuando se usa webpack)
//module.exports = { sum };

// one euro is:
const oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

function fromEuroToDollar (valueEuro) {
    if (Number(valueEuro)) {
    let valueDollar = valueEuro * oneEuroIs["USD"];
 return valueDollar ;
 } else if (!Number.isInteger(valueEuro)) {
    return false ;
 }
};

function fromDollarToYen (doll) {
    let euros = doll / oneEuroIs["USD"];
    let yenes =  euros * oneEuroIs["JPY"];
    return yenes ;
};

function fromYenToPound (yen) {
    if (yen>0) {
    let euros = yen / oneEuroIs["USD"];
    let libras = euros * oneEuroIs["GBP"];
    return libras ;
    } else if (0>yen) {
        return false ;
    }
};

module.exports = {fromDollarToYen,fromEuroToDollar,fromYenToPound};