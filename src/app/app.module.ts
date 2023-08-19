import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatCardModule} from '@angular/material/card'
import {MatToolbarModule} from '@angular/material/toolbar';
import { SpecialCardsComponent } from './components/special-cards/special-cards.component';
import { MenuItemDescComponent } from './components/menu-item-desc/menu-item-desc.component'
import { MatDialogModule } from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { LoginComponent } from './components/login/login.component'
// import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'
import {ReactiveFormsModule} from '@angular/forms'

import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore'
import { AngularFireModule } from '@angular/fire/compat';
// import { AngularFirestore } from '@angular/fire/compat/firestore';

import { OrderPageComponent } from './components/order-page/order-page.component';
import { HomeComponent } from './components/home/home.component';




@NgModule({
  declarations: [
    AppComponent,
    SpecialCardsComponent,
    MenuItemDescComponent,
    LoginComponent,
    OrderPageComponent,
    HomeComponent
  ],
  imports: [
    // BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatToolbarModule,
    MatDialogModule,
    MatButtonModule,
    // MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatRadioModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    
    // AngularFirestoreModule,
    
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
