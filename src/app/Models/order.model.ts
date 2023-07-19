export interface Order {
    order : OrderDetials;
    address : Address;
    paymentDetails : PaymentMethod;
}


export interface OrderDetials {
    orderId : string;
    quantity: number;
    itemName: string;  //Restricts to available items in the DB
    price: number;
}

export interface Address{
    userName: string;
    addressLine1: string;
    addressLine2: string;
    city: string;
    state: string;
    postalCode: number;
    country: string;

}

export interface PaymentMethod{
    paymentOptions : ['UPI', 'NetBanking','Debit Card','Credit Card', 'COD'];

}

