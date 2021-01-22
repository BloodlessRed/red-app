import { Component } from "@angular/core";
import { Header } from "src/app/header/app.header.component";
import { ShoppingCart } from "src/app/shopping-cart/app.shopping-cart.component";
import { GlobalVariablesService } from "src/GlobalVariablesService";

@Component({
  selector: 'goods',
  templateUrl: './app.main-body.goods.component.html',
  styleUrls: ['./app.main-body.goods.component.less']
})
export class Goods{

  constructor(public globalVariablesService:GlobalVariablesService){

  }

  public goodsInCart(id:number):void{
    this.globalVariablesService.goodsInCart(id);

  }

  public addCounterToPopUp():void {

    this.globalVariablesService.popUp++;

  }

  public get getArrayOfGoods(){
    return this.globalVariablesService.arrayOfGoods;
  }
  
  public get getArrayOfGoodsLength(){
    return this.globalVariablesService.arrayOfGoods.length;
  }
}

