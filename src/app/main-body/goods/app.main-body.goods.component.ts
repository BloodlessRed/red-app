import { Component } from "@angular/core";
import { Header } from "src/app/header/app.header.component";
import { ShoppingCart } from "src/app/shopping-cart/app.shopping-cart.component";
import { GlobalVariables } from "src/GlobalVariables";

@Component({
  selector: 'goods',
  templateUrl: './app.main-body.goods.component.html',
  styleUrls: ['./app.main-body.goods.component.less']
})
export class Goods{

  public arrayOfGoods = GlobalVariables.arrayOfGoods;

  constructor(){

  }

  public goodsInCart(id:number):void{
    ShoppingCart.goodsInCart(id);
  }

  public addCounterToPopUp():void {

    GlobalVariables.popUp++;

  }
  
}

