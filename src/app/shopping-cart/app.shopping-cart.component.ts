import { Component } from "@angular/core";
import { GlobalVariablesService } from "src/GlobalVariablesService";
import { CounterObject } from "./CounterObject";

@Component({
  selector: 'shopping-cart',
  templateUrl: './app.shopping-cart.component.html',
  styleUrls: ['./app.shopping-cart.component.less']
})
export class ShoppingCart {

  public counterObject = new CounterObject(this.globalVariablesService);

  constructor(private globalVariablesService:GlobalVariablesService){
    
  }

  // public test(v:any):void{
  //   console.log(v);
  // }

  hideCart() {

    this.globalVariablesService.blackBoxVisibility = false;

    this.globalVariablesService.loadingScreenVisibility = false;

    this.globalVariablesService.goodsCartVisibility = false;
  }
  
  
  public removeAllItems(){


    this.globalVariablesService.itemsInCartMap.clear();

    this.globalVariablesService.popUp = 0;

    this.globalVariablesService.arrayOfCounters = [];

    console.log(this.globalVariablesService.itemsInCartMap)
  }

  public get getBlackBoxVisibility() : boolean {
    return this.globalVariablesService.blackBoxVisibility;
  }

  
  public set setBlackBoxVisibility(v : boolean) {
    this.globalVariablesService.blackBoxVisibility = v;
  }
  
  public get getLoadingScreenVisibility() : boolean {
    return this.globalVariablesService.loadingScreenVisibility;
  }

  
  public set setLoadingScreenVisibility(v : boolean) {
    this.globalVariablesService.loadingScreenVisibility = v;
  }

  
  public get getGoodsCartVisibility() : boolean {
    return this.globalVariablesService.goodsCartVisibility;
  }
  

  public get getItemsInCart(){
    return Array.from(this.globalVariablesService.itemsInCartMap) 
  }
  

}