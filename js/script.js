//ctrl + K + C para comentar lineas
//ctrl + K + U para descomentar lineas

//Creo Array de los productos disponibles
const productos = [
    {id:1, nombre: "AMD RYZEN 3", componente: "Procesador", precio:125000},
    {id:2, nombre: "AMD Ryzen 5 5600G", componente: "Procesador", precio:210000 },
    {id:3, nombre: "Samsung 24 G50 Curvo 144Hz Full HD", componente: "Monitor", precio:269000 },
    {id:4, nombre: "Samsung 22 T350 75Hz", componente: "Monitor", precio:123900 },
    {id:5, nombre: "Teclado Redragon Kumara K552", componente: "Periferico", precio:40990 },
    {id:6, nombre: "Teclado Gaming Retroiluminado Wesdar MK10", componente: "Periferico", precio:9130 },
    {id:7, nombre: "Kolink Inspire K3 RGB  M-ATX Vidrio Templado ", componente: "Gabinete", precio:53900 },
    {id:8, nombre: "Aerocool Bionic G WT V2 White ARGB ATX", componente: "Gabinete", precio:61900 },
]
class Carrito {
    constructor(){
        this.productos = [];
        this.descuento = 10;
        this.MaxProdParaDescuento = 3;
        this.total = 0;
    }
    agregarProducto(id){
        let producto = productos.find(prodid => prodid.id === id);
        console.log(producto);
        if(producto){
            this.productos.push(producto);
            console.log("Agregaste el Producto #" + id + "al Carrito" );
        } else {
            console.log("No se encontro el Producto #" + id + "!");
        }
    }
    listarCarrito(){
        let salida = "";
        this.productos.forEach(item => {
            salida += item.id + " - " + item.nombre + " - " + item.componente + " - $ " + item.precio+ "\n";
        })

        return salida;
    }
    calcularTotalProductos(){
        return this.productos.length;
    }
    aplicarDescuento(){
        if(this.calcularTotalProductos() >= this.MaxProdParaDescuento){
            return Math.round((this.calcularTotalPagar() * this.descuento) / 100);
        } else {
            return 0;
        }
    }
    calcularTotalPagar(){
        return this.productos.reduce ((acumulador, item) => acumulador += item.precio, 0)
    }
}
function listarProductos(){
    let salida = "";
    productos.forEach(item => {
        salida += item.id + " - " + item.nombre + " - " + item.componente + " - $ " + item.precio+ "\n";
    })
    return salida;
}

//login de usuario con ejemplo
let nombreUsuario = "tutor a cargo";
let contraseñaUsuario = "coderhouse";
let ingreso = false;

let usuario = prompt("Ingrese su nombre de usuario.");
if (usuario==nombreUsuario){
    for (let i=2; i>=0;i--){
        let contraseña = prompt ("Ingrese su contraseña.");
        if (contraseña==contraseñaUsuario){
            alert("Login exitoso");
            ingreso = true;
            break
        } else{
            alert("Contraseña incorrecta. Tiene "+i+" intentos restantes.")
        }
    }
}else{
    alert("Nombre de usuario no registrado.")
}
const carrito = new Carrito();
if (ingreso){
    let opcionSeleccionada = 8;

while (opcionSeleccionada !=0){
    opcionSeleccionada = parseInt(prompt("Seleccione el producto a agregar al carrito : \n Presione 0 para salir del menú. \n\n" + listarProductos()));

    if (opcionSeleccionada == 0){
        break;
    }
    carrito.agregarProducto(opcionSeleccionada);
}
let productosCarrito = "Detalle:\n" + carrito.listarCarrito();
let salidaSubtotal = "Subtotal: $" + carrito.calcularTotalPagar();
let salidaDescuento = "Descuento: $" + carrito.aplicarDescuento();
let montoFinal = "Total: $" + Math.round(carrito.calcularTotalPagar() - carrito.aplicarDescuento());
alert (productosCarrito + "\n" + salidaSubtotal + "\n" + salidaDescuento + "\n" + montoFinal);
}
alert("Muchas gracias "+nombreUsuario+" por visitar nuestra página")

