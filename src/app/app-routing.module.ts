import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CreateCardPage} from "./pages/create-card/create-card.page";

const routes: Routes = [
  { path: '', redirectTo: 'cards', pathMatch: 'full'},
  { path: 'create-card', component: CreateCardPage },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
