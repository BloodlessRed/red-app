import { Injectable } from "@angular/core";
import { GlobalVariablesService } from "src/GlobalVariablesService";

@Injectable()
export class CounterObject{

  constructor(private globalVariablesService:GlobalVariablesService){

  }
  action(action:string, keyForMap:number){

    // let parent = ele.parentElement;

    // let superiorParent = parent.parentElement;

    let price = 0;

    let mapValue = this.globalVariablesService.itemsInCartMap.get(keyForMap);

    this.globalVariablesService.arrayOfGoods.forEach((ele)=>{

      if(ele[0]==mapValue[0]){

        price = ele[1];
      }
    })
    
    if(action == "sub"){

      if ((mapValue[1]-1) >=0) {

        mapValue[1]--;

        this.globalVariablesService.popUp--;
      }

    }else if (action == "add"){

      mapValue[1]++;

      this.globalVariablesService.popUp++
    }

    this.globalVariablesService.itemsInCartMap.set(keyForMap,[mapValue[0],mapValue[1],price * mapValue[1]]);
  
  }
}
