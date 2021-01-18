import { Component } from "@angular/core";
import { GlobalVariables } from "src/GlobalVariables";
import { CounterObject } from "./CounterObject";

@Component({
  selector: 'shopping-cart',
  templateUrl: './app.shopping-cart.component.html',
  styleUrls: ['./app.shopping-cart.component.less']
})
export class ShoppingCart {


  public static blackBoxVisibility: boolean;

  public static loadingScreenVisibility: boolean;

  public static goodsCartVisibility:boolean;

  public static arrayOfCounters:number[] = [];

  public arrayOfGoods:any[] = GlobalVariables.arrayOfGoods;

  public counterObject = new CounterObject();

  constructor(){
    
  }

  // public test(v:any):void{
  //   console.log(v);
  // }

  public static addNewItemInMap (id:number):void {
    GlobalVariables.itemsInCartMap.set(id, [GlobalVariables.arrayOfGoods[id][0], 1, GlobalVariables.arrayOfGoods[id][1]]);
    // console.log(ShoppingCart.itemsInCartMap);

  }
  
  public static modifyExistingItemInMap (id:number):void {
    GlobalVariables.itemsInCartMap.set(id, [GlobalVariables.arrayOfGoods[id][0], ShoppingCart.arrayOfCounters[id], GlobalVariables.arrayOfGoods[id][1] * ShoppingCart.arrayOfCounters[id]])
    // console.log(ShoppingCart.itemsInCartMap);
  }
  
  public static goodsInCart (id:number):void{

    console.log(id);
    if (ShoppingCart.arrayOfCounters[id] == undefined) {
      ShoppingCart.arrayOfCounters[id] = 0;
      ShoppingCart.arrayOfCounters[id]++;  
    }else{
      ShoppingCart.arrayOfCounters[id]++;     
    }
  
    if(!GlobalVariables.itemsInCartMap.has(id)){
    
     ShoppingCart.addNewItemInMap(id);
  
    }else{
  
      ShoppingCart.modifyExistingItemInMap(id);
  
    }
  }

  hideCart() {

    ShoppingCart.blackBoxVisibility = false;

    ShoppingCart.loadingScreenVisibility = false;

    ShoppingCart.goodsCartVisibility = false;
  }
  
  
  public removeAllItems(){


    GlobalVariables.itemsInCartMap.clear();

    GlobalVariables.popUp = 0;

    ShoppingCart.arrayOfCounters = [];

    console.log(GlobalVariables.itemsInCartMap)
  }

  public get getBlackBoxVisibility() : boolean {
    return ShoppingCart.blackBoxVisibility;
  }

  
  public set setBlackBoxVisibility(v : boolean) {
    ShoppingCart.blackBoxVisibility = v;
  }
  
  public get getLoadingScreenVisibility() : boolean {
    return ShoppingCart.loadingScreenVisibility;
  }

  
  public set setLoadingScreenVisibility(v : boolean) {
    ShoppingCart.loadingScreenVisibility = v;
  }

  
  public get getGoodsCartVisibility() : boolean {
    return ShoppingCart.goodsCartVisibility;
  }
  

  public get getItemsInCart(){
    return Array.from(GlobalVariables.itemsInCartMap) 
  }
  

}