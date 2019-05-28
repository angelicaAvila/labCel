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
  id: number;
  productForm: FormGroup;
  editMode = false;

 

  ngOnInit() {
    this.activateRoute.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          console.log(this.id);
          this.editMode = params['id'] != null;
          this.initForm();
        }
      );
  }

  saveProducts(){
    this.productService.saveProductToDB();
  }

  saveProduct(){
    this.productManage.setProduct(this.productForm.value);
    this.saveProducts();
    this.route.navigate(['home']);
  }

  onSubmit() {
    if (this.editMode) {
      this.productManage.updateProduct(this.id, this.productForm.value);
      this.productService.saveProductToDB();
    } else {
      this.productManage.addProduct(this.productForm.value);
      this.productService.saveProductToDB();
    }
    this.onCancel();
  }

  initForm() {
    let nombre = '';
    let marca = '';
    let precio = 0;
    let precioMayoreo = 0;
    let costo = 0;
    let categoria = '';
    let stock = 0;
    let imagen = '';

    if (this.editMode) {
      const product = this.productManage.getProduct(this.id);
      nombre = product.nombre;
      marca = product.marca;
      precio = product.precio;
      costo = product.costo;
      precioMayoreo = product.precioMayoreo;
      stock = product.stock;
      imagen = product.imagen;
      categoria = product.categoria;

      console.log(product);
    }
    this.productForm = new FormGroup({
      'nombre': new FormControl(nombre, Validators.required),
      'precio': new FormControl(precio, Validators.required),
      'marca': new FormControl(marca, Validators.required),
      'costo': new FormControl(costo, Validators.required),
      'precioMayoreo': new FormControl(precioMayoreo, Validators.required),
      'imagen': new FormControl(imagen, Validators.required),
      'stock': new FormControl(stock, Validators.required),
      'categoria': new FormControl(categoria, Validators.required),

    })
  }

  onCancel() {
    this.route.navigate(['home']);
  }
  
}
