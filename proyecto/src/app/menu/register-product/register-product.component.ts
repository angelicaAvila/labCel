import { Component, OnInit, EventEmitter, Output} from '@angular/core';
import { ProductService } from 'src/app/shared/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/shared/product.model';
import { ProductManageService } from 'src/app/shared/productManage.service';

@Component({
  selector: 'app-register-product',
  templateUrl: './register-product.component.html',
  styleUrls: ['./register-product.component.css']
})
export class RegisterProductComponent implements OnInit {
  
  constructor(  private productService: ProductService, 
                private productManage: ProductManageService,
                private activateRoute: ActivatedRoute,
                private route: Router) { 
  }
  product: Product = {
    nombre: '',
    stock: 0,
    precio: 0,
    precioMayoreo: 0,
    costo: 0,
    categoria: '',
    marca: '',
    imagen: ''
  };

  ngOnInit() {
  }

  saveProducts(){
    this.productService.saveProductToDB();
  }

  saveProduct(){
    this.productManage.setProduct(this.product);
  }

  editItem(){
    this.productService.updateItem(1,this.product).subscribe(
      res=>{
          this.route.navigate(['/home']);
      },
      err=> console.log(err)
    );  
  }
  
}
