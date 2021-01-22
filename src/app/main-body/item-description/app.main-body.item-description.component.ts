import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Header } from "src/app/header/app.header.component";
import { ShoppingCart } from "src/app/shopping-cart/app.shopping-cart.component";
import { GlobalVariablesService } from "src/GlobalVariablesService";

@Component({
  selector: 'item-description',
  templateUrl: './app.main-body.item-description.component.html',
  styleUrls: ['./app.main-body.item-description.component.less']
})
export class ItemDescription implements OnInit{
  
  public currentProduct:any;

  constructor(private globalVariablesService:GlobalVariablesService, 
              private route: ActivatedRoute){

  }

  ngOnInit(){
    this.route.params.subscribe((param)=>{
      const id = param?.id || '';
      this.currentProduct = this.getCurrentCommodity(id);
    })
  }

  
  public getCurrentCommodity(id:number) : any {
    return this.globalVariablesService.arrayOfGoods[id];
  }
  
}

