
    //Distintas formas de crear objetos

    function Persona(nombre = "Marcos", apellido="Cucatto" , mail = "marcoscucatto4@gmail.com"){
        this.nombre = nombre;//si vemos This hacemos referencia a la propiedad del objeto , si no vemos this hace referencia al nombre del parametro
        this.apellido = apellido;
        this.mail = mail;
        this.nombreCompleto =  function(){
            return this.nombre + " " + this.apellido;
        }
    }

                // USO DE PROTOTYPEEEEEEEE
Persona.prototype.tel = "29953123456"
    // Esto es un metodo para 
    let padre = new Persona("Marcos", "Cucatto" ,"marcoscucatto4@gmail.com");
     padre.tel = "29554613"; //si declaro asi, no se sustituye el del prototype, si no lo declaro se cambian los valores.
    console.log(padre.tel) ;
    
    let madre = new Persona("Luisa", "asdasd" ,"asdasda@gmail.com");
    console.log(madre.tel);
    
    
    padre.nombre = "Carlos";
    console.log(padre.nombreCompleto());
    
    
    let miObjeto = new Object(); //Esta es otra opcion, es la mas formal
    let miObjeto2 = {}; //Lo mas comun para crear objeto en js, sintaxis breve , mismo resultado
    
    let miCadena1 = new String();
    let miCadena2 = "hola";
    
    let miNumero = new Number(12);
    let miNumero2 = 299;
    
    let miBoolean = new Boolean(false);
    let miBoolean2 = true;
    
    let miArreglo1 = new Array();
    let miArreglo2 = [1,2,3,4,5];
    
    let miFuncion = new Function();
    let miFuncion2 = function(){};