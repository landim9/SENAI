function ex01() {

    let a = Number(document.getElementById('a').value)
    let b = Number(document.getElementById('b').value)
    let c = Number(document.getElementById('c').value)


    document.querySelector('#result').innerHTML = `A soma de 'a' + 'b" divido por 'c' é igual a: ${(a + b) / c}`

}

function ex02() {

    let vel = Number(document.getElementById('vel').value)
    let dist = Number(document.getElementById('dist').value)

    document.querySelector('#distanciaperc').innerHTML = `A distancia percorrida pelo carro é: ${dist / vel}`

}

function ex03() {

    let ValorB = Number(document.getElementById('salario').value)
    let ValorC = Number(document.getElementById('indice').value)
    let Resultfinal = ValorB + (ValorB * ValorC / 100)

    document.querySelector('#reajust').innerHTML = `Teve seu salario reajustado e ficou: ${Resultfinal.toFixed(2)}`

}   

function ex04() {

    let vitoria = Number(document.getElementById('Vitorias').value)
    let empate = Number(document.getElementById('Empates').value)
    let saldo = empate + (vitoria * 3)

    document.querySelector('#timeResult').innerHTML = `O Saldo de pontos do time é ${saldo}`;

}

function ex05() {
    
}
