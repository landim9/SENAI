class Arvore {
    especie;
    altura; 
    idade;
}

const arvore = new Arvore();
console.log(arvore);

const arvore1 = new Arvore();
arvore1.idade = 100;
arvore1.altura = 30;
arvore1.especie = 'Pau Brasil';

const arvore2 = new Arvore();
arvore2.idade = 50;
arvore2.altura = 20;
arvore2.especie = 'Ipe';


console.log(arvore1);
console.log(arvore2);

class Argo {
    constructor(ano) {
        this.modelo = 'Argo';
        this.marca = 'Fiat';
        this.ano = ano == undefined ? 2024 : ano;
    }
}

const argos = [];
for(i = 0; i < 10; i++) {
    if(i % 2 == 0) {
        const argo = new Argo(2010+i);
        argos.push(argo);
    } else {
        const argo = new Argo();
        argos.push(argo);
    }
}

console.log(argos);
