import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { MainHeader } from "../header/app.header.module";
import { Body } from "./app.main-body.component";
import { Goods } from "./goods/app.main-body.goods.component";
import { Introduction } from "./introduction/app.main-body.introduction.component";
import { SearchBox } from "./search-box/app.main-body.search-box.component";

@NgModule({
  declarations:[
    Body,
    Introduction,
    Goods,
    SearchBox

  ],
  imports:[MainHeader, CommonModule, RouterModule],
  exports:[
    Body,
    Introduction,
    Goods,
    SearchBox

  ]
})
export class MainBodyOfSite{

}