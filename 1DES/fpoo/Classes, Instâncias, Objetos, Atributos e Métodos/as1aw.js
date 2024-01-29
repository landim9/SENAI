const obj = {}
obj.nome = 'Bola'
obj.preço = 39.90
obj.qtd = 10


obj.total = function () {
    return obj.preço * obj.qtd
}

obj.showHTML = () => {


    let str = `<label>Nome:</label> <label> ${obj.nome}<br></label>`
    str += `<label>Preço:</label> <label> ${obj.preço}<br></label>`
    str += `<label>Quantidade:</label> <label> ${obj.qtd}<br></label>`
    str += `<label>Total:</label> <label> ${obj.total()}<br></label>`
    return str
}

const obj2 = {
    nome: "Mesa de escritório",
    preço: 349.90,
    qtd: 2,
    total: function () {
        return this.preço * this.qtd
    },

    showHTML(){ 
        let str = `<label>Nome:</label> <label> ${this.nome}<br></label>`
        str += `<label>Preço:</label> <label> ${this.preço}<br></label>`
        str += `<label>Quantidade:</label> <label> ${this.qtd}<br></label>`
        str += `<label>Total:</label> <label> ${this.total()}<br></label>`
        return str
    }
}


const obj3 = {
    nome: "Caneta Azul",
    preço: 1299.90,
    qtd: 8,
    total: function () {
        return this.preço * this.qtd
    },

    showHTML(){ 
        let str = `<label>Nome:</label> <label> ${this.nome}<br></label>`
        str += `<label>Preço:</label> <label> ${this.preço}<br></label>`
        str += `<label>Quantidade:</label> <label> ${this.qtd}<br></label>`
        str += `<label>Total:</label> <label> ${this.total()}<br></label>`
        return str
    }
}





console.log(obj)
console.log('Valor total = R$ ' + obj.total().toFixed(2))

console.log(obj2)
console.log('Valor total = R$ ' + obj2.total().toFixed(2))

console.log(obj3)
console.log('Valor total = R$ ' + obj2.total().toFixed(2))



const main = document.getElementById('objetos')


const div = document.createElement('div')
main.innerHTML = obj.showHTML()
main.appendChild(div)

const div2 = document.createElement('div')
main.innerHTML = obj2.showHTML()
main.appendChild(div2)

const div3 = document.createElement('div')
main.innerHTML = obj3.showHTML()
main.appendChild(div3)