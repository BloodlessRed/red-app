import { Injectable } from "@angular/core";

@Injectable()
export class GlobalVariablesService{

  public blackBoxVisibility: boolean;

  public loadingScreenVisibility: boolean;

  public goodsCartVisibility:boolean;

  public arrayOfCounters:number[];

  public arrayOfGoods:any[];

  public popUp:number;

  public itemsInCartMap:Map<any,any>;

  public hide:string;

  public show:string;

  constructor(){

    this.blackBoxVisibility = false;

    this.loadingScreenVisibility = false;

    this.goodsCartVisibility = false;

    this.arrayOfCounters = [];

    this.arrayOfGoods = 
    [
      ["Atlas Copco 4220-0982-15 15 meter Cable", 2000, "./assets/Atlas Cable 1.png"],
      ["Atlas Copco 4220-1007-10 10 meter Extension Cable", 2100, "./assets/Atlas Cable 2.png"],
      ["Atlas Copco 4200-1010-15 10 meter Extension Cable", 2100, "./assets/Atlas Cable 3.png"],
      ["Atlas Copco Nutrunner 1", 3400, "./assets/Atlas ETD inline 1.png"],
      ["Atlas Copco Nutrunner 2", 3240, "./assets/Atlas ETD inline 2.png"],
      ["Atlas Copco Nutrunner 3", 5000, "./assets/Atlas ETD inline 3.png"],
    ] ;
  
    this.popUp = 0;
  
    this.itemsInCartMap = new Map();
    
    this.hide = 'hide';
  
    this.show = 'show';
    }



  public addNewItemInMap (id:number):void {
    this.itemsInCartMap.set(id, [this.arrayOfGoods[id][0], 1, this.arrayOfGoods[id][1]]);
    // console.log(ShoppingCart.itemsInCartMap);

  }
  
  public modifyExistingItemInMap (id:number, ammountOfCommodity:number):void {
    this.itemsInCartMap.set(id, [this.arrayOfGoods[id][0], ammountOfCommodity, this.arrayOfGoods[id][1] * ammountOfCommodity])
    // console.log(ShoppingCart.itemsInCartMap);
  }

  public goodsInCart (id:number):void{

    console.log(id);
    if (this.arrayOfCounters[id] == undefined) {
      this.arrayOfCounters[id] = 0;
      this.arrayOfCounters[id]++;  
    }else{
      this.arrayOfCounters[id]++;     
    }
  
    if(!this.itemsInCartMap.has(id)){
    
     this.addNewItemInMap(id);
  
    }else{
  
      this.modifyExistingItemInMap(id, this.arrayOfCounters[id]);
  
    }
  }


}