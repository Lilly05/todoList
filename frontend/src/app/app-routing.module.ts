import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CreateCardPage} from "./pages/create-card/create-card.page";
import {CardsPage} from "./pages/cards/cards.page";
import {FinishedCardsPage} from "./pages/finished-cards/finished-cards.page";
import { TestingComponent } from './pages/testing/testing.component';

const routes: Routes = [
  { path: '', redirectTo: 'cards', pathMatch: 'full'},
  { path: 'cards', component: CardsPage},
  { path: 'create-card', component: CreateCardPage },
  { path: 'finished-cards', component: FinishedCardsPage},
  { path: 'testing', component: TestingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
