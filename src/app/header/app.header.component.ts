import { Component } from "@angular/core";
import { GlobalVariables } from "src/GlobalVariables";
import { ShoppingCart } from "../shopping-cart/app.shopping-cart.component";

@Component({
  selector: 'main-header',
  templateUrl: './app.header.component.html',
  styleUrls: ['./app.header.component.less']
})
export class Header{

  constructor(){

  }


  // public static style:string;

  services = ['Services','Company','Customer Portfolio','Free Evaluation','Contacts'];
  
  
  public get getPopUp() : number {
    return GlobalVariables.popUp;
  }

  
  public set setPopUp(v : number) {
    GlobalVariables.popUp = v;
  }
 
  public revealCart(){

    ShoppingCart.blackBoxVisibility = true;

    ShoppingCart.loadingScreenVisibility = true;

    setTimeout(() => {
      ShoppingCart.loadingScreenVisibility = false;

      ShoppingCart.goodsCartVisibility = true;
    }, 2000);
  }
  // public get getStyle() : string {
  //   return Header.style;
  // }
  
  
  // public set setStyle(v : string) {
  //   Header.style = v;
  // }
  
  
  
}

