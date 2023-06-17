import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-special-cards',
  templateUrl: './special-cards.component.html',
  styleUrls: ['./special-cards.component.scss']
})
export class SpecialCardsComponent {

  @Input() itemName = '';
  @Input() imgUrl: string = "../assets/alex-haney-CAhjZmVk5H4-unsplash.jpg";
}
