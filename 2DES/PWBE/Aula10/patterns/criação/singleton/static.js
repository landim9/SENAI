// Exemplo de classe simples e classe estatica

class TV {
    constructor(status){
        this._volume = 0;
        this._on = status == undefined ? false : true;
    }
    get volume(){
        return this._volume;
    }
    set volume(value){
        this._volume = value;
    }

    static ligado(){
        return new TV(true);
    }
    static desligado(){
        return new TV();
    }
}

const tv1 = TV.ligado();
const tv2 = TV.desligado();

console.log(tv1);
console.log(tv2);

// tv1.volume = 11;

console.log(tv1.volume);
