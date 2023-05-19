import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./shared/component/dashboard/dashboard.component";
import { ProductsComponent } from "./shared/component/products/products.component";
import { UsersComponent } from "./shared/component/users/users.component";
import { UserComponent } from "./shared/component/users/user/user.component";
import { ProductComponent } from "./shared/component/products/product/product.component";
import { PageNotFoundComponent } from "./shared/component/page-not-found/page-not-found.component";
import { EditProductComponent } from "./shared/component/products/edit-product/edit-product.component";
import { EditUserComponent } from "./shared/component/users/edit-user/edit-user.component";

const route:Routes = [
    {path : '', component : DashboardComponent},
    {path : 'users', component : UsersComponent},
    {path : 'users/:userId', component : UserComponent},
    {path : 'products', component : ProductsComponent},
    {path : 'products/:productId', component : ProductComponent},
    {path : 'products/:productId/edit', component : EditProductComponent},
    {path : 'users/:userId/edit', component : EditUserComponent},
    {path : 'page-not-found', component : PageNotFoundComponent},
    {path : '**', redirectTo : 'page-not-found'}, // any router(wide cart rount) always last 
  
  ]



@NgModule({
    imports :[
        RouterModule.forRoot(route)
    ],
    exports:[
      RouterModule
    ]
})

export class AppRoutingModule{

}