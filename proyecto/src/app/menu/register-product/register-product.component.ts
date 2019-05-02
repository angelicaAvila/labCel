import { Component, OnInit, EventEmitter, Output} from '@angular/core';
import { ProductService } from 'src/app/shared/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/shared/product.model';

@Component({
  selector: 'app-register-product',
  templateUrl: './register-product.component.html',
  styleUrls: ['./register-product.component.css']
})
export class RegisterProductComponent implements OnInit {
  
  constructor(  private productService: ProductService, 
                private activateRoute: ActivatedRoute,
                private route: Router) { 
  }
  product: any = {
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

  ngOnInit() {
  }

  saveProduct(){
    delete this.product.id;
    this.productService.saveProductToDB(this.product);
  }

  editItem(){
    this.productService.updateItem(this.product.id,this.product).subscribe(
      res=>{
          this.route.navigate(['/home']);
      },
      err=> console.log(err)
    );  
  }
  
}
