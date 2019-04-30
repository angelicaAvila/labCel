import { Component, OnInit, EventEmitter, Output} from '@angular/core';
import { ProductsComponent } from '../../dashboard/products/products.component';
import { Item } from 'src/app/models/Item';
import {ItemService} from '../../services/item.service'
import {ActivatedRoute,Router} from '@angular/router'
@Component({
  selector: 'app-register-product',
  templateUrl: './register-product.component.html',
  styleUrls: ['./register-product.component.css']
})
export class RegisterProductComponent implements OnInit {

  item: any ={
    idProducto: 0,
    nombre: '',
    stock: 0,
    precioPublico: 0,
    precioMayoreo: 0,
    costo: 0,
    categoria: '',
    marca: '',
    imagen: ''
  };

  edit: boolean = false;

    constructor(private itemService: ItemService, private route: Router, private activatedRoute: ActivatedRoute) { }   
  //model: Producto= new Producto();
  @Output() onsubmit = new EventEmitter<any>();
/*
  public submit(){
    this.onsubmit.emit(this.model);
    console.log(this.model);
    this.model= new Producto();
  }*/

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    if(params.id){
      this.itemService.getItem(params.id).subscribe(
        res =>{
          console.log(res);
          this.item = res;
          this.edit = true;
        },
        err => console.log(err)
      );
    }
  }

  saveItem(){
    delete this.item.idProducto;

    this.itemService.saveItem(this.item).subscribe(
      res=>{
        console.log(res);
        this.route.navigate(['/home']);
      },
      err => console.log(err)
    );
  }

  editItem(){
    this.itemService.updateItem(this.item.idProducto,this.item).subscribe(
      res=>{
          this.route.navigate(['/home']);
      },
      err=> console.log(err)
    );  
  }

}
