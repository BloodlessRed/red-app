import { Component, OnInit } from "@angular/core";
import { GlobalVariablesService } from "src/app/services/GlobalVariablesService";
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

  services = [
    ['Main page','/main-page'],
    ['Services','/services'],
    ['Company','/about-company'],
    ['Customer Portfolio', '/customer-portfolio'],
    ['Free Evaluation', '/evaluation'],
    ['Contacts','/contacts']
  ];
  
  
  public get getPopUp() : number {
    return this.globalVariablesService.getPopUp();
  }

  
  public set setPopUp(v : number) {
    this.globalVariablesService.setPopUp (v);
  }
 
  public revealCart(){

    this.globalVariablesService.setBlackBoxVisibility (true);

    this.globalVariablesService.setLoadingScreenVisibility(true);

    setTimeout(() => {
      this.globalVariablesService.setLoadingScreenVisibility(false);

      this.globalVariablesService.setGoodsCartVisibility(true);
    }, 2000);
  }
  // public get getStyle() : string {
  //   return Header.style;
  // }
  
  
  // public set setStyle(v : string) {
  //   Header.style = v;
  // }
  
  
  
}

