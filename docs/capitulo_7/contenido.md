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

### Objetos personalizados

#### La clase

#### El objeto (ejemplo de clase)

#### El Constructor

#### La propiedad (atributo del objeto)

#### Los métodos

## Herencia

## Encapsulación

## Abstracción
