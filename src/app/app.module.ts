import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {
  MatButtonModule,
  MatCardModule,
  MatGridListModule,
  MatInputModule,
  MatMenuModule,
  MatSliderModule,
  MatToolbarModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RdvsLayoutComponent } from './layouts/rdvs-layout/rdvs-layout.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

@NgModule({
  declarations: [
    AppComponent,
    RdvsLayoutComponent,
    LandingPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatSliderModule,
    RouterModule,
    MatMenuModule,
    MatToolbarModule,
    MatInputModule,
    MatButtonModule,
    MatGridListModule,
    MatCardModule,
    FormsModule,
    HttpClientModule,  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
