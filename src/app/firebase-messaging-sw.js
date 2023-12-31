// import { Injectable } from '@angular/core';
// import { AngularFireMessaging } from '@angular/fire/compat/messaging';

// @Injectable({
//   providedIn: 'root'
// })
// export class MessagingService {
//   token: string | null;

//   constructor(private messaging: AngularFireMessaging) {
//     console.log("messaging");
    
//     this.messaging.getToken.subscribe(token =>{
//       console.log("token",token)
//       this.token = token;
//     } );

//     this.messaging.requestToken.subscribe(token => {
//       console.log("request token",token);
      
//     })

//   }

// //   requestPermission() {
// //     this.messaging.requestPermission()
// //       .subscribe(() => {
// //         console.log('Notification permission granted');
// //       },
// //       (error) => {
// //         console.error('Notification permission denied', error);
// //       });
// //   }
// }
