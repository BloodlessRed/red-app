import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ShoppingCart } from "../shopping-cart/app.shopping-cart.component";
import { UserProfileComponent } from "../user-profile/app.user-profile.component";
import { Header } from "./app.header.component";

@NgModule({
  declarations:[
    Header,
    ShoppingCart,
    UserProfileComponent
  ],
  imports:[CommonModule, RouterModule],
  exports:[
    Header
  ]
})
export class MainHeader{

}