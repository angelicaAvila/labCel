import { Component, OnInit, EventEmitter, Output, Input} from '@angular/core';
import { ProductService } from 'src/app/shared/product.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Product } from 'src/app/shared/product.model';
import { ProductManageService } from 'src/app/shared/productManage.service';
import { FormGroup, FormArray, FormControl, Validators } from '@angular/forms';

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
  @Input() id: number;
  editMode = false;

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
    this.activateRoute.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          console.log(this.id);
          this.editMode = params['index'] != null;
          this.initForm();
        }
      );
  }

  saveProducts(){
    this.productService.saveProductToDB();
  }

  saveProduct(){
    this.productManage.setProduct(this.product);
    this.saveProducts();
    this.route.navigate(['home']);
  }

  onSubmit() {
    if (this.editMode) {
      this.productManage.updateProduct(this.id, this.product);
    } else {
      this.productManage.addProduct(this.product);
    }
    this.onCancel();
  }

  initForm() {
    if (this.editMode) {
      const product = this.productManage.getProduct(this.id);
      console.log(product);
    }
  }

  onCancel() {
  }
  
}
