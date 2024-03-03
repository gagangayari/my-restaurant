import { Injectable, inject } from '@angular/core';
import { Firestore, collection, addDoc, CollectionReference} from '@angular/fire/firestore'
import { Observable } from 'rxjs';
import { Order } from 'src/app/Models/order.model';
// import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class OrderSvcService {

  private users$ : Observable<any>;
  private orders: CollectionReference;
  private firestore : Firestore = inject(Firestore);

  constructor() {
    this.orders = collection(this.firestore, 'orders');
   }

  
   /**
    * Adds a new order to the db
    */
  async addOrder(data : Order){
    try {
      let docRef = await addDoc(this.orders,{'item': 'Mutton-biryani','price': 250});
      console.log("DocRef", docRef);
      
    }
    catch (err) {
      console.log("Error while adding order", err);
      
    }
    
  }
}
