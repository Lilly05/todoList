import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardsPage } from './pages/cards/cards.page';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { IonicModule } from '@ionic/angular';
import { CreateCardPage } from './pages/create-card/create-card.page';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FinishedCardsPage } from './pages/finished-cards/finished-cards.page';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CardsPage,
    CreateCardPage,
    NavbarComponent,
    FinishedCardsPage
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    IonicModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
