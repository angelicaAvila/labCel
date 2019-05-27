export class Sales{
    public nombre: string;
    public marca: string;
    public cantidad: number;
    public precio: number;
    public total: number;

    constructor(   nombre: string, precio: number,
                   marca: string, cantidad: number ){
       this.nombre = nombre;
       this.precio = precio;
       this.marca = marca;
       this.cantidad = cantidad;
       this.total = 0;
   }
}