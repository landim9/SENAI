function Calculo() {

    let a = Number(document.getElementById('a').value)
    let b = Number(document.getElementById('b').value)
    let c = Number(document.getElementById('c').value)

    
    document.querySelector('#result').innerHTML = `A soma de 'a' + 'b" divido por 'c' é igual a: ${(a+b)/c}`
 
}

function distancia(){

    let vel = Number(document.getElementById('vel').value)
    let dist = Number(document.getElementById('dist').value)

    document.querySelector('#distanciaperc').innerHTML = `A distancia percorrida pelo carro é: ${dist/vel}`
    
}

function reajuste(){

    let ValorA = (document.getElementById('nome').value)
    let ValorB = Number(document.getElementById('Salario').value)
    let ValorC = Number(document.getElementById('Indice').value)
    let Resultfinal = ValorB + (ValorB * ValorC / 100)

    document.querySelector('#reajust').innerHTML = `teve seu salario reajustado e ficou: ${Resultfinal}`

}   