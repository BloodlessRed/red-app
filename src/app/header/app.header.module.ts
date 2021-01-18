import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ShoppingCart } from "../shopping-cart/app.shopping-cart.component";
import { Header } from "./app.header.component";

@NgModule({
  declarations:[
    Header,
    ShoppingCart
  ],
  imports:[CommonModule],
  exports:[
    Header
  ]
})
export class MainHeader{

}