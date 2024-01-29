function generateCreditCardNumber() {
    const accountTypes = ["visa", "discover", "amex", "mastercard"];
    const creditCardAccount = {
        visa: () => `${randomInt(4000000000000000, 9999999999999999)}`,
        discover: () => `${randomInt(6000000000000000, 6999999999999999)}`,
        amex: () => `${randomInt(34000000000000000, 3799999999999999)}`,
        mastercard: () => `${randomInt(5000000000000000, 5999999999999999)}`
    };

    let randomAccountType = accountTypes[randomInt(0, accountTypes.length - 1)];
    let randomAccountNumber = creditCardAccount[randomAccountType]();

    let creditCardNumber = `${randomAccountNumber}`;

    document.getElementById('creditCardNumber').textContent = creditCardNumber;
}

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

document.getElementById(generateCreditCardNumber());

function generateExpirationDate() {
    var currentYear = new Date().getFullYear();
    var randomYear = Math.floor(Math.random() * 5) + currentYear;

    var months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
    var randomMonth = months[Math.floor(Math.random() * months.length)];

    let expiration = `${randomMonth}/${randomYear}`;

    document.getElementById('expirationDate').textContent = expiration;
}

console.log(generateExpirationDate());

function cvvGenerator() {
    var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
    var number = '' 
    for (var i = 0; i < 3; i++) {
      number += numbers[Math.floor(Math.random() * numbers.length)]
    }
    document.getElementById('cvv').textContent = number;
}

// function cvvGenerator() {
//     let cvv = '';
//     let characters = '0123456789';

//     for (let i = 0; i < 3; i++) {
//         cvv += characters.charAt(Math.floor(Math.random() * characters.length));
//     }

//     document.getElementById('cvv').textContent = cvv
// }

