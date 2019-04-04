import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor() {
   }

  ngOnInit() {

  }

  public myProducts = [
       {    nombre : "Producto A",
            descripcion : "Descripcion de producto ....................."
       },
       {    nombre : "Producto B",
            descripcion : "Descripcion de producto ....................."
       },
       {    nombre : "Producto C",
            descripcion : "Descripcion de producto ....................."
       },
       {    nombre : "Producto D",
            descripcion : "Descripcion de producto ....................."
       },
       {    nombre : "Producto E",
            descripcion : "Descripcion de producto ....................."
       },
       {    nombre : "Producto F",
            descripcion : "Descripcion de producto ....................."
       }
   ];
}
