const selector = document.getElementById("select");
const value = document.getElementById("valor");
const date = document.getElementById("data");
const quantity = document.getElementById("quantidade");
const product = document.getElementById("produtos");
const total = document.getElementById("total");

selector.addEventListener("change", (event) => {
    const targetValue = event.target.value;

    switch (targetValue) {
        case "null":
            value.value = ""
            break;
        case "Hambúrguer tradicional":
            value.value =  34.50
            break;
        case "Hambúrguer Vegetariana":
            value.value = 37.50
            break;
        case "Hambúrguer Goumert":
            value.value = 35.99
            break;
        case "Hambúrguer Vegano":
            value.value = 36.90
            break;
        case "Hambúrguer":
            value.value = 27.99
            break;
        case "Hamburguer X-TUDO":
            value.value = 29.99
            break;
        case "Batata frita Pequena":
            value.value = 5.99
            break;
        case "Batata frita Media":
            value.value = 8.99
            break;
        case "Batata frita Grande":
            value.value = 12.99
            break;
        case "Batata frita Especial":
            value.value = 17.99
            break;
        case "Salada":
            value.value = 7.99
            break;
        case "Coca Cola 2L":
            value.value = 9.99
            break;
        case "Suco Dell Vale":
            value.value = 6.99
            break;
        case "Fanta Uva":
            value.value = 8.99
            break;
        case "Pepsi 2L":
            value.value = 7.99
            break;
        case "Sprite 2L":
            value.value = 8.99
            break;
        case "Xereta 1,5L":
            value.value = 5.99
            break;
        case "Guarana Antartica 1,5L":
            value.value = 9.99
            break;
        case "Suco de laranja":
            value.value = 4.99
        case "Agua":
            value.value = 8.99
            break;
        case "AG":
            value.value = 1.99
            break;
        default:
            break;
    }
})

quantity.addEventListener("input", (event) => {
    const targetValue = event.target.value;
    total.value = value.value * targetValue
})