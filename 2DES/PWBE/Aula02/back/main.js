const selector = document.getElementById("selector");
const value = document.getElementById("valor");
const date = document.getElementById("data");
const quantity = document.getElementById("quantidade");
const product = document.getElementById("produtos");
const total = document.getElementById("total");

selector.addEventListener("change", (event) => {
    const targetValue = event.target.value;
    
    switch(targetValue) {
        case "null":
            value.value = ""
            break;
        case "HT":
            value.value = "R$34.50"
            break;
        case "HV":
            value.value = "R$37.50"
            break;
        case "HG":
            value.value = "R$35.99"
            break;
        case "HVGN":
            value.value = "R$36.90"
            break;
        case "HB":
            value.value = "R$27.99"
            break;
        case "HXT":
            value.value = "R$29.99"
            break;
        case "BTTP":
            value.value = "R$5.99"
            break;
        case "BTTM":
            value.value = "8.99"
            break;
        case "BTTG":
            value.value = "12.99"
            break;
        case "SL":
            value.value = "R$7.99"
            break;
        case "CC":
            value.value = "R$9.99"
            break;
        case "SDV":
            value.value = "R$6.99"
            break;
        case "FU":
            value.value = "R$8.99"
            break;
        case "PSP":
                value.value = "R$7.99"
                break;
        case "SPT":
            value.value = "R$8.99"
            break;
        case "XRT":
            value.value = "R$5.99"
            break;
            case "GRN":
            value.value = "R$9.99"
            break;
            case "SCL":
            value.value = "R$4.99"
            case "FU":
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
    total.value = value.value * targetValue
})