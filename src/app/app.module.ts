import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatCardModule} from '@angular/material/card'
import {MatToolbarModule} from '@angular/material/toolbar';
import { SpecialCardsComponent } from './components/special-cards/special-cards.component';
import { MenuItemDescComponent } from './components/menu-item-desc/menu-item-desc.component'
import { MatDialogModule } from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button'


@NgModule({
  declarations: [
    AppComponent,
    SpecialCardsComponent,
    MenuItemDescComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatToolbarModule,
    MatDialogModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
