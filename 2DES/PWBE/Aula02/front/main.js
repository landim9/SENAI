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
            value.value = "R$34.50"
            break;
        case "Hambúrguer Vegetariana":
            value.value = "R$37.50"
            break;
        case "Hambúrguer Goumert":
            value.value = "R$35.99"
            break;
        case "Hambúrguer Vegano":
            value.value = "R$36.90"
            break;
        case "Hambúrguer":
            value.value = "R$27.99"
            break;
        case "Hamburguer X-TUDO":
            value.value = "R$29.99"
            break;
        case "Batata frita Pequena":
            value.value = "R$5.99"
            break;
        case "Batata frita Media":
            value.value = "R$8.99"
            break;
        case "Batata frita Grande":
            value.value = "12.99"
            break;
        case "Batata frita Especial":
            value.value = "R$17.99"
            break;
        case "Salada":
            value.value = "R$7.99"
            break;
        case "Coca Cola 2L":
            value.value = "R$9.99"
            break;
        case "Suco Dell Vale":
            value.value = "R$6.99"
            break;
        case "Fanta Uva":
            value.value = "R$8.99"
            break;
        case "Pepsi 2L":
            value.value = "R$7.99"
            break;
        case "Sprite 2L":
            value.value = "R$8.99"
            break;
        case "Xereta 1,5L":
            value.value = "R$5.99"
            break;
        case "Guarana Antartica 1,5L":
            value.value = "R$9.99"
            break;
        case "Suco de laranja":
            value.value = "R$4.99"
        case "Agua":
            value.value = "R$8.99"
            break;
        case "AG":
            value.value = "R$1.99"
            break;
        default:
            break;
    }
})

quantity.addEventListener("input", (event) => {
    const targetValue = event.target.value;
})