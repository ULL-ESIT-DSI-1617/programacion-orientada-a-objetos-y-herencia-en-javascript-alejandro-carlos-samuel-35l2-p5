# JavaScript orientado a objetos

JavaScript dispone de fuertes capacidades de programación orientada a objetos, a pesar de que han tenido lugar algunos debates respecto a sus diferencias de su capacidades en comparación con otros lenguajes.

Este artículo comienza con una Introducción a la programación orientada a objetos, luego examina el modelo de objetos de JavaScript, y finalmente, muestra los conceptos de programación orientada a objetos en JavaScript.

## Terminología

* **Clase** : Define las características del Objeto.

* **Objeto** : Una instancia de una clase.
* **Propiedad** : Una característica del Objeto, como el color.
* **Método** : Una capacidad del Objeto, como caminar.
* **Constructor** : Es un método llamado en el momento de la creación de instancias.
* **Herencia** : Una Clase puede heredar características de otra Clase.
* **Encapsulamiento** : Una Clase sólo define las características del Objeto, un Método sólo define cómo se ejecuta el Método.
* **Abstracción** : La conjunción de herencia compleja, métodos, propiedades que un objeto debe ser capaz de simular en un modelo de la realidad.
* **Polimorfismo** : Diferentes Clases podrían definir el mismo método o propiedad.

## POO en Javascript

### Namespace

Un **espacio de nombres** es un contenedor que permite asociar toda la funcionalidad de un determinado objeto con un nombre único. En JavaScript un espacio de nombres es un objeto que permite a métodos, propiedades y objetos asociarse. La idea de crear espacios de nombres en JavaScript es simple: crear un único objeto global para las variables, métodos, funciones convirtiéndolos en propiedades de ese objeto. El uso de los namespace permite minimizar el conflicto de nombres con otros objetos haciéndolos únicos dentro de nuestra aplicación.

Un espacio de nombres es un objeto:

Vamos a crear un objeto global llamado MIAPLICACION

```javascript
var MIAPLICACION = MIAPLICACION || {};
```
En el código de ejemplo anterior comprobamos si MIAPLICACION ya se encuentra definida. Si es así utilizamos el objeto global MIAPLICACION que existe, si este no existe creamos un objeto vacío llamado MIAPLICACION que encapsulará métodos, funciones, variables y otros objetos que vayamos a crear.

También podemos crear Sub-espacios de nombres:

```javascript
MIAPLICACION.event = {} ;
```

A continuación se muestra el código para la creación de un espacio de nombre y cómo agregar variables, funciones y métodos:

```javascript
// Creación del contenedor llamado MIAPLICACION.metodoComun de método y propiedades comunes.
MIAPLICACION.metodoComun = {
  regExParaNombre: "", // define regex para la validación del nombre
  regExParaTelefono: "", // define regex para validación del teléfono
  validaNombre: function(nombre){
    // Hace algo con el nombre que usted ingresa a la variable reExParaNombre
    // usando "this.regExParaNombre"
  },

  validaNroTelefono: function (numTelefono){
    // Hace algo con el número de teléfono
  }
}

// Objeto junto a la declaración del método
MIAPLICACION.event = {
  addListener: function(el, type, fn){
    // código de relleno
  },
  removeListener: function(el, type, fn){
    // código de relleno
  },
  getEvent: function(e) {
    // código de relleno
  }
  // Puedes agregar otras propiedades y métodos
}

// Sintaxis de utilización del método addListener:
MIAPLICACION.event.addListener("turel", "tipo", callback);
```
### Objetos básicos

JavaScript tiene varios objetos incluidos en su núcleo, como Math, Object, Array y String. El siguiente ejemplo muestra cómo utilizar el objeto Math para obtener un número al azar mediante el uso de su método ```random()```.

```javascript
alert (Math.random ());
```
Cada objeto en JavaScript es una instancia del objeto Object, por lo tanto, hereda todas sus propiedades y métodos.

### Objetos personalizados

#### La clase

JavaScript es un lenguaje basado en prototipos que no contiene ninguna declaración de clase, como se encuentra, por ejemplo, en C + + o Java. Esto es a veces confuso para los programadores acostumbrados a los lenguajes con una declaración de clase. En su lugar, JavaScript utiliza funciones como clases. Definir una clase es tan fácil como definir una función. En el ejemplo siguiente se define una nueva clase llamada Persona.

```javascript
function Persona() { }
```

#### El objeto (ejemplo de clase)

Para crear un nuevo ejemplo de un objeto obj utilizamos la declaración new obj , asignando el resultado (que es de tipo obj ) a una variable para tener acceso más tarde.

En el siguiente ejemplo se define una clase llamada Persona y creamos dos instancias ( persona1 y persona2 ).

```javascript
function Persona() {
}

var persona1 = new Persona();
var persona2 = new Persona();
```

#### El Constructor

El constructor es llamado en el momento de la creación de la instancia (el momento en que se crea la instancia del objeto). El constructor es un método de la clase. En JavaScript, la función sirve como el constructor del objeto, por lo tanto, no hay necesidad de definir explícitamente un método constructor. Cada acción declarada en la clase es ejecutada en el momento de la creación de la instancia.

El constructor se usa para establecer las propiedades del objeto o para llamar a los métodos para preparar el objeto para su uso. Más adelante describiremos como agregar métodos a clase y sus definiciones ya que se realiza utilizando una sintaxis diferente.

En el siguiente ejemplo, el constructor de la clase ```Persona``` muestra un alerta que dice (Una instancia de persona) cuando se crea la instancia de la clase ```Persona```.

```javascript
function Persona() {
  alert('Una instancia de Persona');
}

var persona1 = new Persona();
var persona2 = new Persona();
```

#### La propiedad (atributo del objeto)

Las propiedades son variables contenidas en la clase, cada instancia del objeto tiene dichas propiedades. Las propiedades deben establecerse a la propiedad prototipo de la clase (función), para que la herencia funcione correctamente.

Para trabajar con propiedades dentro de la clase se utiliza la palabra reservada this , que se refiere al objeto actual. El acceso (lectura o escritura) a una propiedad desde fuera de la clase se hace con la sintaxis: NombreDeLaInstancia.Propiedad. Es la misma sintaxis utilizada por C++, Java y algunos lenguajes más. (Desde dentro de la clase la sintaxis es this.Propiedad que se utiliza para obtener o establecer el valor de la propiedad).

En el siguiente ejemplo definimos la propiedad primerNombre de la clase Persona y la definimos en la creación de la instancia.

```javascript
function Persona(primerNombre) {
  this.primerNombre = primerNombre;
  alert('Una instancia de Persona');
}

var persona1 = new Persona("Alicia");
var persona2 = new Persona("Sebastian");

// Muestra el primer nombre de persona1
alert ('persona1 es ' + persona1.primerNombre); // muestra "persona1 es Alicia"
alert ('persona2 es ' + persona2.primerNombre); // muestra "persona2 es Sebastian"
```

#### Los métodos

## Herencia

## Encapsulación

## Abstracción
