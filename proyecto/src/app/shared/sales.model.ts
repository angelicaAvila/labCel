export class Sales{
    public nombre: string;
    public marca: string;
    public cantidad: number;
    public precio: number;
    public total: number;
    public vendedor: string;
    public tienda: string;
    public tipoVenta: string;

    constructor(   nombre: string, precio: number,
                   marca: string, cantidad: number ){
       this.nombre = nombre;
       this.precio = precio;
       this.marca = marca;
       this.cantidad = cantidad;
       this.total = 0;
       this.tipoVenta = "Menudeo";
       this.vendedor = "vendedor 1";
       this.tienda = "local A";
   }
}