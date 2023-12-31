import { Injectable} from '@angular/core';
import { AngularFireAuth} from '@angular/fire/compat/auth';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class AuthService {


  isLoggedIn: boolean = false;

  constructor(private auth: AngularFireAuth, private router : Router) { 
    console.log("Constructor");
    this.authState();
    
    

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


  login(username: string , password: string){
    return this.auth.signInWithEmailAndPassword(username,password)
    .then((info) => {
      this.isLoggedIn = true;
      console.log("user info: " + info.user?.uid);
      
      console.log("correct ",info.user?.displayName);
      localStorage.setItem('user', JSON.stringify(info.user?.uid));
      
    })
    .catch((err) => {
      this.isLoggedIn = false;
      console.log("here ",err);
    })

    


  }

  async signUp(username: string, password: string): Promise<void>{
    this.auth.createUserWithEmailAndPassword(username,password)
    .then((info) => {
      console.log("Successfully signed up", info);
      

    })
    .catch((error) => {
      // Handle Errors here.
      let errorCode = error.code;
      let errorMessage = error.message;
      if (errorCode == 'auth/weak-password') {
        alert('The password is too weak.');
      } else {
        alert(errorMessage);
      }

    });

  }

  async logout(){
    let temp = await this.auth.signOut();
    console.log("Signed out", temp);
    localStorage.clear()
    
  }

  
  public get isLoggedInf() : boolean {
    //User details should be stored in local storage
    const user = JSON.parse(localStorage.getItem('user')!)
    //Considered logged in when user is present in local storage
    return user != null
  }
  

}
