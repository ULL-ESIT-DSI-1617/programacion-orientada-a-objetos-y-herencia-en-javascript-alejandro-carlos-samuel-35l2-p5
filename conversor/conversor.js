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
        super(value, string);
    }
    celsius2Kelvin() {
        let conversion = super.getValue + 273.15;
        return conversion.toPrecision(4);
    }
    celsius2Farenheit() {
        let conversion = (super.getValue * 1.8) + 32;
        return conversion.toPrecision(4);
    }
    convert() {
        if (super.getString == 'k' || super.getString == 'K') {
            return celsius2Kelvin();
        } else if (super.getString == 'f' || super.getString == 'F') {
            return celsius2Farenheit();
        }
    }
}


class Kelvin extends Temperatura {
    constructor(value, string) {
        super(value, string);
    }

    kelvin2Celsius() {
        let conversion = super.getValue - 273.15;
        return conversion.toPrecision(4);
    }

    kelvin2Farenheit() {
        let conversion = super.getValue * 9 / 5 - 459.67;
        return conversion.toPrecision(4);
    }
    convert() {
        if (super.getString == 'c' || super.getString == 'C') {
            return kelvin2Celsius();
        } else if (super.getString == 'f' || super.getString == 'F') {
            return kelvin2Farenheit();
        }
    }
}

class Farenheit extends Temperatura {
    constructor(value, string) {
        super(value, string)
    }
    farenheit2Kelvin() {
        let conversion = (super.getValue + 459.67) * 5 / 9;
        return conversion.toPrecision(4);
    }
    farenheit2Celsius() {
        let conversion = (super.getValue - 32) * 5 / 9;
        return conversion.toPrecision(4);
    }
    convert() {
        if (super.getString == 'k' || super.getString == 'K') {
            return farenheit2Kelvin();
        } else if (super.getString == 'c' || super.getString == 'C') {
            return farenheit2Celsius();
        }
    }
}


function calculate() {
    let result;
    let temp = original.value;
    //let regexp = /([-+]?\d+(?:\.\d*)?)\s*([fFcCkK])/;
    let regexp = /^([0-9]*)([cCfFkK])(\sto)?\s([cCfFkK])$/;
    let m = temp.match(regexp);

    if (m) {
        let num = m[1]; // valor
        let clase = m[2]; // 2 es la clase
        let unidad = m[4]; // 4 es la unidad a convertir
        num = parseFloat(num);

        if (clase == 'c' || clase == 'C') {
            let celsius = new Celsius(num, unidad);
            result = celsius.convert();
        } else if (clase == 'k' || clase == 'K') {
            let kelvin = new Kelvin(num, unidad);
            result = kelvin.convert();
        } else if (clase == 'f' || clase == 'F') {
            let farenheit = new Farenheit(num, unidad);
            result = farenheit.convert();
        }
        converted.innerHTML = result;

    } else {
        converted.innerHTML = "ERROR! Try something like '4.2C' instead";
    }
}
