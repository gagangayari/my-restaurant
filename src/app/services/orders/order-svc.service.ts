import { Injectable, inject } from '@angular/core';
import { Firestore, collection, addDoc, CollectionReference} from '@angular/fire/firestore'
import { Observable } from 'rxjs';
import { Order } from 'src/app/Models/order.model';
import { HttpClient } from '@angular/common/http';

// import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class OrderSvcService {

  private users$ : Observable<any>;
  private orders: CollectionReference;
  // private firestore : Firestore = inject(Firestore);

  constructor(private http: HttpClient) {
    // this.orders = collection(this.firestore, 'orders');
   }

  
   /**
    * Adds a new order to the db
    */
  async addOrder(data : Order){
    try {
      console.log("Calling addOrder");
      // this.http.get("www.google.com")
      
       await this.http.get("http://localhost:5001/my-restaurant-ce2f0/us-central1/sendOrder").subscribe((response)=>{
          console.log(response);
          
       });
      // let docRef = await addDoc(this.orders,{'item': 'Mutton-biryani','price': 250});
      // console.log("DocRef", docRef);
      
    }
    catch (err) {
      console.log("Error while adding order", err);
      
    }
    
  }
}
