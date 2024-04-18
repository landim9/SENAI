class Carro {
    constructor(modelo, marca, ano) {
        this.marca =  marca == undefined ? '' : modelo;
        this.modelo = modelo == undefined ? '' : modelo;
        this.ano = ano == undefined ? new Date().getFullYear() : ano;
    }
}

// const carro1 = new Carro('Fusca', 'Volkswagen');
// console.log(carro1);

class Argo {
    constructor(ano) {
        this.modelo = 'Argo';
        this.marca = 'Fiat';
        this.ano = ano == undefined ? new Date().getFullYear() : ano;
    }
}

class Gol {
    constructor(ano) {
        this.modelo = 'Gol';
        this.marca = 'VW';
        this.ano = ano == undefined ? new Date().getFullYear() : ano;
    }
}

class Turbo {
    constructor(marca) {
        this.marca = marca == undefined ? 'Generica' : marca;
    }
}


class carroBuilder {
    constructor(modelo, marca, ano, turbo) {
        if(modelo && marca && ano) {
            if (modelo == 'Argo') {
                this.carro = new Argo(ano);
            } else if (modelo == 'Gol') {
                this.carro = new Gol(ano);
            } else {
                this.carro = new Carro(modelo, marca, ano);
            }
        } else if (modelo && marca) {
            if (modelo == 'Argo') {
                this.carro = new Argo();
            } else if (modelo == 'Gol') {
                this.carro = new Gol();
        } else {
            this.carro = new Carro(modelo, marca);
        }
    } else {
        this.carro = new Carro();
    }
}
    SetTurbo(turbo) {
    this.carro.turbo = new Turbo(turbo);
    return this; 
    }

    build() {
    return this.carro;
    }
}

const carro1 = new carroBuilder('Argo', 'Fiat', 2020);
const carro2 = new carroBuilder('Gol', 'VW', 2020);
carro2.SetTurbo('Garret')
const carro3 = new carroBuilder('Onix', 'Chevrolet', 2020);
const carro4 = new carroBuilder();

const carros = {
'carro1' : build(),
'carro2' : build(),
'carro3' : build(),
'carro4' : build()
}
