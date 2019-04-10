import { Component, OnInit, EventEmitter, Output} from '@angular/core';
import { ProductsComponent } from '../../dashboard/products/products.component';

@Component({
  selector: 'app-register-product',
  templateUrl: './register-product.component.html',
  styleUrls: ['./register-product.component.css']
})
export class RegisterProductComponent implements OnInit {

  constructor() { }

  //model: Producto= new Producto();
  @Output() onsubmit = new EventEmitter<any>();
/*
  public submit(){
    this.onsubmit.emit(this.model);
    console.log(this.model);
    this.model= new Producto();
  }*/

  ngOnInit() {
  }

}
