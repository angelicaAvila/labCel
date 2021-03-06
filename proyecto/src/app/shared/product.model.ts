export class Product{
     public nombre: string;
     public stock: number;
     public categoria: string;
     public marca: string;
     public costo: number;
     public precio: number;
     public precioMayoreo: number;
     public imagen: string;

     constructor(   nombre: string,
                    categoria: string, costo: number, 
                    precio: number, precioMayoreo: number,
                    marca: string, stock: number, imagen: string){
        this.nombre = nombre;
        this.categoria = categoria;
        this.costo = costo;
        this.precio = precio;
        this.precioMayoreo = precioMayoreo;
        this.marca = marca;
        this.stock = stock;
        this.imagen = imagen;
    }
}