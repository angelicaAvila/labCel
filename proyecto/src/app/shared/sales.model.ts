export class Sales{
    public nombre: string;
    public marca: string;
    public mayoreo: number;
    public precio: number;
    public imagen: string;

    constructor(   nombre: string, precio: number,
                   marca: string, imagen: string, 
                   mayoreo: number){
       this.nombre = nombre;
       this.precio = precio;
       this.marca = marca;
       this.imagen = imagen;
       this.mayoreo = mayoreo;
   }
}