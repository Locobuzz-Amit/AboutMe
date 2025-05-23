// import { Routes } from '@angular/router';

// export const routes: Routes = [];

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { BodyComponent } from './body/body.component';

export const routes: Routes = [
  { path: '', component: BodyComponent },
  { path: 'home', component: BodyComponent}, // home/main
  { path: 'contact', component: ContactComponent } // contact page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
