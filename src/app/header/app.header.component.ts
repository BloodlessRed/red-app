import { Component, OnInit } from "@angular/core";
import { GlobalVariablesService } from "src/GlobalVariablesService";
import { ShoppingCart } from "../shopping-cart/app.shopping-cart.component";

@Component({
  selector: 'main-header',
  templateUrl: './app.header.component.html',
  styleUrls: ['./app.header.component.less']
})
export class Header {

  constructor(private globalVariablesService:GlobalVariablesService){

  }

  // public static style:string;

  services = ['Services','Company','Customer Portfolio','Free Evaluation','Contacts'];
  
  
  public get getPopUp() : number {
    return this.globalVariablesService.popUp;
  }

  
  public set setPopUp(v : number) {
    this.globalVariablesService.popUp = v;
  }
 
  public revealCart(){

    this.globalVariablesService.blackBoxVisibility = true;

    this.globalVariablesService.loadingScreenVisibility = true;

    setTimeout(() => {
      this.globalVariablesService.loadingScreenVisibility = false;

      this.globalVariablesService.goodsCartVisibility = true;
    }, 2000);
  }
  // public get getStyle() : string {
  //   return Header.style;
  // }
  
  
  // public set setStyle(v : string) {
  //   Header.style = v;
  // }
  
  
  
}

