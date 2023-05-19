import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DashboardComponent } from './shared/component/dashboard/dashboard.component';
import { UsersComponent } from './shared/component/users/users.component';
import { ProductsComponent } from './shared/component/products/products.component';
import {  RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './shared/component/navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { ProductComponent } from './shared/component/products/product/product.component';
import { UserComponent } from './shared/component/users/user/user.component';
import { PageNotFoundComponent } from './shared/component/page-not-found/page-not-found.component';
import { EditProductComponent } from './shared/component/products/edit-product/edit-product.component';
import { EditUserComponent } from './shared/component/users/edit-user/edit-user.component';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UsersComponent,
    ProductsComponent,
    NavbarComponent,
    ProductComponent,
    UserComponent,
    PageNotFoundComponent,
    EditProductComponent,
    EditUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
