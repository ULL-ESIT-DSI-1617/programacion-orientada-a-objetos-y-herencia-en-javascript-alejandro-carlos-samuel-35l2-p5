class Medida {
    constructor(value, string) {
        this.valor = value;
        this.cadena = string;
    }
}

class Temperatura extends Medida {
    constructor(value, string) {
        super(value, string);
    }

}
