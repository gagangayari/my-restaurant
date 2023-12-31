import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormControl, FormGroup } from '@angular/forms';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  registerForm : boolean = false;

  form: FormGroup = new FormGroup({
    username: new FormControl('username'),
    password: new FormControl('password'),
    confirmPassword: new FormControl('confirmPassword'),

  })

  /**
  * LoginStatus to check if the user is logged in
  */
  loginStatus: any = null;
  errMsg : string = '';

  
  constructor(public authSvc: AuthService, private afAuth: AngularFireAuth){

  }

  submit(event : Event){
    const usernae = this.form.get('username')?.value;
    const password = this.form.get('password')?.value;
    console.log("Form submission", usernae, password);

    
    const user = this.authSvc.login(usernae, password)
    .then((res) => console.log(res))
    .catch((err) => {
      console.log("err",err)
      this.errMsg = err
      alert("Wrong username or password")
    }
    );

    // console.log("Login status: " + loginStatus);
    
    event.preventDefault();

  }  

  validatePassword(password: string, confirmedPassword: string): boolean {

    return true;

  }
  

  signUp(){
    const username = this.form.get('username')?.value
    const password = this.form.get('password')?.value
    const confirmPassword = this.form.get('confirmPassword')?.value

    this.validatePassword(password, confirmPassword);
    this.authSvc.signUp(username, password);

  }

  doSignUp(){

    const username = this.form.get('username')?.value;
    const password = this.form.get('password')?.value;

    this.registerForm = true;

    // this.authSvc.signUp(username, password);


  }



  onSubmit(){
    console.log("Submit");
    
  }

}
