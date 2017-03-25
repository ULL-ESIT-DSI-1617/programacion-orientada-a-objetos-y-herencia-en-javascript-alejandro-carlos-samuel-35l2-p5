class Medida {
    constructor(value, string) {
        this.valor = value;
        this.cadena = string;
    }

    get getValue() {
        return this.valor;
    }

    get getString() {
        return this.cadena;
    }

    set setValue(newValue) {
        this.valor = newValue;
    }

    set setString(newString) {
        this.cadena = newString;
    }

}

class Temperatura extends Medida {
    constructor(value, string) {
        super(value, string);
    }
}

class Celsius extends Temperatura {
    constructor(value, string) {
        super(value, string)
    }
    celsius2Kelvin() {
        let conversion = super.getValue + 273.15;
        return conversion;
    }
    celsius2Farenheit() {
        let conversion = (super.getValue * 1.8) + 32;
        return conversion;
    }
}
