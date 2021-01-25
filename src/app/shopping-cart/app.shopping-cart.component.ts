import { Component, OnDestroy, OnInit } from "@angular/core";
import { from, Subject } from "rxjs";
import { GlobalVariablesService } from "src/app/services/GlobalVariablesService";
import { CounterObject } from "./CounterObject";

@Component({
  selector: 'shopping-cart',
  templateUrl: './app.shopping-cart.component.html',
  styleUrls: ['./app.shopping-cart.component.less']
})
export class ShoppingCart implements OnInit, OnDestroy{

  public counterObject = new CounterObject(this.globalVariablesService);

  public goodsInCart:any[] = [];

  public globalVariablesMapObserver$: Subject<Map<any,any>>;

  constructor(private globalVariablesService:GlobalVariablesService){

    this.globalVariablesMapObserver$ = this.globalVariablesService.getMapObserver$();
  }

  ngOnInit(){

    this.globalVariablesMapObserver$.subscribe((val)=>{
      this.goodsInCart = Array.from(val);
    })

  }

  ngOnDestroy(){

    this.globalVariablesMapObserver$.unsubscribe();
  }

  hideCart() {

    this.globalVariablesService.setBlackBoxVisibility(false);

    this.globalVariablesService.setLoadingScreenVisibility(false);

    this.globalVariablesService.setGoodsCartVisibility(false);
  }
  
  
  public removeAllItems(){


    this.globalVariablesService.setItemsInCartMap(new Map());

    this.globalVariablesService.setPopUp(0);

    this.globalVariablesService.setArrayOfCounters([]);

    console.log(this.globalVariablesService.getItemsInCartMap())
  }

  public getBlackBoxVisibility() : boolean {

    return this.globalVariablesService.getBlackBoxVisibility();
  }

  
  public setBlackBoxVisibility(v : boolean) {
    this.globalVariablesService.setBlackBoxVisibility(v);
  }
  
  public getLoadingScreenVisibility() : boolean {
    return this.globalVariablesService.getLoadingScreenVisibility();
  }

  
  public setLoadingScreenVisibility(v : boolean) {
    this.globalVariablesService.setLoadingScreenVisibility(v);
  }

  
  public getGoodsCartVisibility() : boolean {
    return this.globalVariablesService.getGoodsCartVisibility();
  }
    

}