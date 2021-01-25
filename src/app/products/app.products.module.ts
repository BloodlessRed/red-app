import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { MainHeader } from "../header/app.header.module";
import { Products } from "./app.products.component";
import { Goods } from "./goods/app.products.goods.component";
import { Introduction } from "./introduction/app.products.introduction.component";
import { SearchBox } from "./search-box/app.products.search-box.component";

@NgModule({
  declarations:[
    Products,
    Introduction,
    Goods,
    SearchBox

  ],
  imports:[MainHeader, CommonModule, RouterModule],
  exports:[
    Products,
    Introduction,
    Goods,
    SearchBox

  ]
})
export class ProductsContainer{

}