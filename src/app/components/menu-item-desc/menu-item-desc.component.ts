import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { OrderSvcService } from 'src/app/services/orders/order-svc.service';

@Component({
  selector: 'app-menu-item-desc',
  templateUrl: './menu-item-desc.component.html',
  styleUrls: ['./menu-item-desc.component.scss']
})
export class MenuItemDescComponent {

  menuItemName: string;
  menuDescription: string;
  isLoggedIn: boolean = true;


  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any, 
    private router: Router, 
    private dialogRef: MatDialogRef<MenuItemDescComponent>,
    private orderSvc: OrderSvcService,
    private authSvc: AuthService)
    {
    this.menuItemName = this.data.title;
    this.menuDescription = this.data.description;

  }

  orderNow(){
    console.log("Order");

    if(!this.authSvc.isLoggedIn){
      console.log("Not logged in");
      this.isLoggedIn = false;
      // window.Error("Please login")
    }

    else{
      this.dialogRef.close()
      this.router.navigate(['/order']);
    }
    

  }
}
