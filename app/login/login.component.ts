import {Component} from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  //styleUrls: ['./login.component.css']
})
export class LoginComponent {
  closeResult: string;

  constructor(private modalService: NgbModal, private _user : AuthenticationService) {}

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }


  public users=[];
  public user;
  func(user, pass){
    // alert("hello");
    var f;
    this._user.getUser().subscribe(data => this.users = data); 
    // la manera chafa de filtrar, y ni funciona bien
    // for(let i = 0; i<this.users.length; i++){
    //   if(this.users[i].pass==pass && this.users[i].user==user)
    //     this.user=this.users[i];

    // }
    console.log(this.users);
    
  }
}