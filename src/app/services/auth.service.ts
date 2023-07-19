import { Injectable, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AngularFireAuth} from '@angular/fire/compat/auth';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnChanges{

  isLoggedIn: boolean = false;

  constructor(private auth: AngularFireAuth, private router : Router) { 
    console.log("Constructor");
    this.authState();
    
    

  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("OnChanges", changes);
    
  }

  authState() {
    console.log("Oninit", this.isLoggedIn);
    
    this.auth.onAuthStateChanged((user)=>{
      if(user){
        console.log("logged in");
        
        this.isLoggedIn = true;
      }

      else{
        console.log("not logged in");

        this.isLoggedIn = false;
      }
      
    })

  }


  async login(){
    console.log('Login');    
    await this.auth.signInWithEmailAndPassword('xyz@gmail.com','xyz@123')
    .then((info) => {
      this.isLoggedIn = true;
      console.log("user info: " + info.user?.uid);
      
      console.log("correct ",info.user?.displayName);
      
    })
    .catch((err) => {
      console.log("here ",err);
    })
  }

  async logout(){
    let temp = await this.auth.signOut();
    console.log("Signed out", temp);
    
  }

}
