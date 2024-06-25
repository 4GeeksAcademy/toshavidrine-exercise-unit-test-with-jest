// app.js
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
};

function fromEuroToDollar(euro) {
    return euro * oneEuroIs.USD;
}

function fromDollarToYen(dollar) {
    let euro = dollar / oneEuroIs.USD;
    return euro * oneEuroIs.JPY;
}

function fromYenToPound(yen) {
    let euro = yen / oneEuroIs.JPY;
    return euro * oneEuroIs.GBP;
}

module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound };
