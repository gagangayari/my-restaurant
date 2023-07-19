import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(public authSvc: AuthService, private afAuth: AngularFireAuth){

  }

  submit(event : Event){
    this.authSvc.login();
    event.preventDefault();

  }  

}
