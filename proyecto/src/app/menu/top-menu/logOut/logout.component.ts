import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { AuthService } from 'src/app/auth.service';


@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private router: Router,private authService:AuthService) { 
    
  }


  /*salir(){
    this.router.navigateByUrl('/');
  }*/
  ngOnInit() {
    
  }

}
