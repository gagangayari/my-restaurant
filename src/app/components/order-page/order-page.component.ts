import { Component } from '@angular/core';
import { Order } from 'src/app/Models/order.model';
import {OrderSvcService} from '../../services/orders/order-svc.service'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.scss']
})
export class OrderPageComponent {
  price : number = 500;
  quantity : number = 1;
  coupon : string = '';
  discountedPrice : number = 0;

  selectedMethod : string = '';

  //Order object
  order : Order;

  constructor(private orderService : OrderSvcService,
    private http: HttpClient){

  }

  checkValidCoupon(coupon :string): boolean{
    if(coupon == "coupon"){
      return true;
    }
    else {
      return false;
    }
  }

  applyCoupon(){
    console.log("coupon applied", this.coupon);
    
    if(this.checkValidCoupon(this.coupon)){
      this.price  = this.price - (0.5 * this.price)
    }
    else {
      this.price = 500;

    }

  }

  updatePrice(){

  }

  onBuyNow(){

  }

  submitAddress(param: any){

  }

  finallyProceed(){
    console.log("Finally proceed");
    

    this.orderService.addOrder(this.order);

  }

}
