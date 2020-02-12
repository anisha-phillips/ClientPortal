import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{MaterialModule} from './Module/material.module'
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { GridsComponent } from './grids/grids.component';
import{HighlightDirective} from './app-highlight.directive';
import { HomeComponent } from './home/home.component';
import { FundWithdrawalComponent } from './fund-withdrawal/fund-withdrawal.component';
import { UpdateParticularsComponent } from './update-particulars/update-particulars.component';



@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    GridsComponent,
    HighlightDirective,
    HomeComponent,
    FundWithdrawalComponent,
    UpdateParticularsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
