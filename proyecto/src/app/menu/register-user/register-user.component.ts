import { Component, OnInit, EventEmitter, Output} from '@angular/core';
import {UserService} from '../../services/user.service'
import { User } from 'src/app/models/User';
import {ActivatedRoute,Router} from '@angular/router'

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  user: any ={
    idUsuario: 0,
    nombre: '',
    pass:'',
    admin:0
  }

  edit: boolean = false;

  constructor(private userService:UserService, private route:Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    if(params.id){
      this.userService.getUser(params.id).subscribe(
        res =>{
          console.log(res);
          this.user = res;
          this.edit = true;
        },
        err => console.log(err)
      );
    }
  }
  saveUser(){
    delete this.user.idUsuario;

    this.userService.saveUser(this.user).subscribe(
      res=>{
        console.log(res);
        this.route.navigate(['/home']);
      },
      err => console.log(err)
    );
  }

  editItem(){
    this.userService.updateUser(this.user.idUsuario,this.user).subscribe(
      res=>{
          this.route.navigate(['/home']);
      },
      err=> console.log(err)
    );  
  }

}
