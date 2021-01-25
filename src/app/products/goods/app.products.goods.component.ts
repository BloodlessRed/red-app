import { Component } from "@angular/core";
import { Header } from "src/app/header/app.header.component";
import { ShoppingCart } from "src/app/shopping-cart/app.shopping-cart.component";
import { GlobalVariablesService } from "src/app/services/GlobalVariablesService";

@Component({
  selector: 'goods',
  templateUrl: './app.products.goods.component.html',
  styleUrls: ['./app.products.goods.component.less']
})
export class Goods{

  constructor(public globalVariablesService:GlobalVariablesService){

  }

  public goodsInCart(id:number):void{
    this.globalVariablesService.goodsInCart(id);

  }

  public addCounterToPopUp():void {

    this.globalVariablesService.setPopUp(this.globalVariablesService.getPopUp()+1);

  }

  public get getArrayOfGoods(){
    return this.globalVariablesService.getArrayOfGoods();
  }
  
  public get getArrayOfGoodsLength(){
    return this.globalVariablesService.getArrayOfGoods().length;
  }
}

