import { Component } from '@angular/core';
import { MenuItemDescComponent } from '../menu-item-desc/menu-item-desc.component';
import { MatDialog } from '@angular/material/dialog';
// import {gsap} from 'gsap' 
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor (private dialog: MatDialog){  }


  specialItems = [
    {
      name: "Paneer Tikka",
      desc : "Embark on a tantalizing journey with Paneer Tikka, a vegetarian delight that ignites your taste buds with its irresistible flavors. Cubes of creamy paneer, marinated in a harmonious blend of aromatic spices and tangy yogurt, are delicately charred to perfection in a tandoor. The sizzle of the hot grill gives birth to a symphony of enticing aromas that waft through the air, beckoning you to indulge. With each tender bite, you experience a delightful combination of smoky, spicy, and tangy notes that dance on your palate. Paneer Tikka is a culinary masterpiece that captures the essence of Indian cuisine in a single, unforgettable dish.",
      imgUrl : "../assets/alex-haney-CAhjZmVk5H4-unsplashLarge.jpeg"
    },
    {
      name: "Chicken Kebab",
      desc : "Savor the sizzling delight of Chicken Kebab, where succulent pieces of marinated chicken are expertly grilled to perfection. As the flames kiss the meat, a symphony of enticing aromas fills the air, whetting your appetite. The tender and juicy chicken, infused with a medley of spices and herbs, delivers an explosion of flavors with every bite. Each skewer is a culinary masterpiece, showcasing the mastery of the grill. With its charred exterior and moist interior, Chicken Kebab offers a tantalizing balance of smokiness and tenderness. Get ready to indulge in this savory delight that promises a flavorful journey for your taste buds.",
      imgUrl : "../assets/ali-inay-y3aP9oo9Pjc-unsplashLarge.jpeg"



    },
    {
      name: "Chicken Biryani",
      desc : "Indulge in the regal flavors of Chicken Biryani, where succulent chicken and fragrant basmati rice unite in a harmonious dance of spices. Each spoonful unravels a symphony of taste, with tender meat enveloped in a tapestry of aromatic herbs and exotic seasonings. The vibrant hues and intoxicating aromas beckon, inviting you to savor a culinary masterpiece that transcends borders. From the first bite to the last, Chicken Biryani tantalizes the senses, leaving an unforgettable imprint of culinary bliss. Prepare to be transported to a world where flavor reigns supreme and every morsel is an experience worth cherishing.",
      imgUrl : "../assets/jonathan-borba-uB7q7aipU2o-unsplashLarge.jpeg"

      
    }
  ]
  openItem(itemName: string, description: string){
    console.log("Opened", itemName);
    const dialogRef = this.dialog.open(MenuItemDescComponent,{
      data:{
        title : itemName,
        description: description
      },
  
    })
    
  }

}
