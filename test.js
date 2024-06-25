// Import the functions from the app.js file
const { fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

// Test for fromEuroToDollar
test('converts 1 euro to 1.07 dollars', () => {
    let dollars = fromEuroToDollar(1);
    expect(dollars).toBe(1.07);
});

// Test for fromDollarToYen
test('converts 1 dollar to yen', () => {
    let yen = fromDollarToYen(1);
    let expectedYen = (1 / 1.07) * 156.5;
    expect(yen).toBeCloseTo(expectedYen);
});

// Test for fromYenToPound
test('converts 1 yen to pounds', () => {
    let pounds = fromYenToPound(1);
    let expectedPounds = (1 / 156.5) * 0.87;
    expect(pounds).toBeCloseTo(expectedPounds);
});

