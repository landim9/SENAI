const formPessoa = document.querySelector('#formPessoa');
const pessoas = [];

formPessoa.addEventListener('submit', (e) => {
    e.preventDefault();
    pessoas.push(new Pagamento(formPessoa.nome.value, formPessoa.salario.value));
    criarCard();
})

function criarCard() {
    const cards = document.querySelector('.cards');
    let card = document.querySelector('.card');
    cards.innerHTML = '';
    cards.appendChild(card)

    pessoas.forEach(pessoa => {
        let cardNew = card.cloneNode(true);
        cardNew.classList.remove('model');
        cardNew.querySelector("#nomeValor").innerHTML = pessoa.nome;
        cardNew.querySelector("#salarioValor").innerHTML = `Salario:R$${pessoa.salario}`;
        cardNew.querySelector("#salarioBase").innerHTML = `Salário Base:R$${pessoa.salarioBase}`;
        cardNew.querySelector("#salarioLiquido").innerHTML = `Salário Liquido:R$${pessoa.salarioLiquido}`;
        cards.appendChild(cardNew);
    })
}


function remover(e) {
    e.parentNode.remove()
    pessoas.splice(e, 1)
}