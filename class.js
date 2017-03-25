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
    c2K() {
        let conversion = getValue() + 273.15;
        return conversion;
    }
    c2F() {
        let conversion = (getValue() * 1.8) + 32;
        return conversion;
    }
}
