import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.css']
})
export class TopMenuComponent implements OnInit {

  constructor(private authService: AuthService, 
              private router: Router) { }

  ngOnInit() {
  }

  getSales(){
    this.router.navigate(['sales']);
  }

  onLogout(){
    this.authService.logout();
  }

}
