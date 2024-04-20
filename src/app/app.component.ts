import { Component, OnInit } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from './components/login/login.component';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'my-restaurant';




  constructor(
    private dialog: MatDialog,
    private router: Router,
    public authSvc: AuthService){
  }

  ngOnInit(): void {
    this.router.events.subscribe((val: any)=>{
      // console.log("Event", val.url);
      localStorage.setItem(val.url, "yes");
    
      
    })


  }

  

  login(){
    const dialogRef = this.dialog.open(LoginComponent,{
    })

    // dialogRef.afterClosed().subscribe((result)=>{
    //   console.log("After Closed", result);
      
    // })
  }

  logout(){
    this.authSvc.logout();

  }
}
