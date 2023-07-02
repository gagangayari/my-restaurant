import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn: boolean = false;

  constructor(private auth: AngularFireAuth, private router : Router) { }


  async login(){
    console.log('Login');
    await this.auth.signInWithEmailAndPassword('xyz@gmail.com','xyz@123')
    .then((info) => {
      this.isLoggedIn = true;
      console.log("user info: " + info.user?.uid);
      
      console.log("correct ",info.user?.displayName);
      // this.router.navigate(['/order']);
      
    })
    .catch((err) => {
      console.log("here ",err);
    })
  }

}
