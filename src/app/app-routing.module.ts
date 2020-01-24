import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {RdvsLayoutComponent} from './layouts/rdvs-layout/rdvs-layout.component';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';


const routes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: 'rdv', component: RdvsLayoutComponent, loadChildren: './rdv/rdvs.module#RdvsModule'}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
