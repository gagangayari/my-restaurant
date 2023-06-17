import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-restaurant';

  specialItems = [
    {
      name: "Paneer Tikka",
      desc : "lorem",
      imgUrl : "../assets/alex-haney-CAhjZmVk5H4-unsplash.jpg"
    },
    {
      name: "Chicken Kebab",
      desc : "lorem",
      imgUrl : "../assets/ali-inay-y3aP9oo9Pjc-unsplash.jpg"



    },
    {
      name: "Biryani Rice",
      desc : "lorem",
      imgUrl : "../assets/jonathan-borba-uB7q7aipU2o-unsplash.jpg"

      
    }
  ]

  openItem(){
    console.log("Opened");
    
  }
}
