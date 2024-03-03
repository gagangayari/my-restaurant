import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Item } from 'src/app/Models/item.model';
import { MenuItemDescComponent } from '../menu-item-desc/menu-item-desc.component';

@Component({
  selector: 'app-special-cards',
  templateUrl: './special-cards.component.html',
  styleUrls: ['./special-cards.component.scss']
})
export class SpecialCardsComponent {

  @Input() itemName = '';
  // @Input() imgUrl: string = "../assets/alex-haney-CAhjZmVk5H4-unsplashLarge.jpeg";

  items : Item[]   = [
    {
      'itemName': 'Paneer Tikka',
      'desc': 'Embark on a tantalizing journey with Paneer Tikka, a vegetarian delight that ignites',
      'price': 200,
'imgUrl': "../assets/alex-haney-CAhjZmVk5H4-unsplashLarge.jpeg"
    },
    {
      'itemName': 'Chicken Kebab',
      'desc': 'Savor the sizzling delight of Chicken Kebab, where succulent pieces of marinated chicken are expertly grilled to perfection.',
      'price': 400,
'imgUrl': "../assets/ali-inay-y3aP9oo9Pjc-unsplashLarge.jpeg"
    },
    {
      'itemName': 'Chicken Biryani',
      'desc': 'Indulge in the regal flavors of Chicken Biryani, where succulent chicken and fragrant basmati rice unite in a harmonious dance of spices.',
      'price': 500,
'imgUrl': "../assets/jonathan-borba-uB7q7aipU2o-unsplashLarge.jpeg"
    }
  ]

  constructor(private dialog: MatDialog){ 
    
  }

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
