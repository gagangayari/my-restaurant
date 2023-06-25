import { Component, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-menu-item-desc',
  templateUrl: './menu-item-desc.component.html',
  styleUrls: ['./menu-item-desc.component.scss']
})
export class MenuItemDescComponent {

  menuItemName: string;
  menuDescription: string;


  constructor(@Inject(MAT_DIALOG_DATA) public data: any){
    this.menuItemName = this.data.title;
    this.menuDescription = this.data.description;

  }
}
