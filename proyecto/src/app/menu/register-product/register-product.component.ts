import { Component, OnInit, EventEmitter, Output} from '@angular/core';
import { ProductsComponent } from '../../dashboard/products/products.component';

@Component({
  selector: 'app-register-product',
  templateUrl: './register-product.component.html',
  styleUrls: ['./register-product.component.css']
})
export class RegisterProductComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  saveData(){
    //Aqui se crea un json y se llama al dataService
  }

}
