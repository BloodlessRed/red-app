import { Injectable } from "@angular/core";
import { GlobalVariables } from "src/GlobalVariables";

@Injectable()
export class CounterObject{

  public itemsInCartMap:Map<any,any>;
  constructor(){

    this.itemsInCartMap = GlobalVariables.itemsInCartMap;
  }
  action(action:string, keyForMap:number){

    // let parent = ele.parentElement;

    // let superiorParent = parent.parentElement;

    let price = 0;

    let mapValue = GlobalVariables.itemsInCartMap.get(keyForMap);

    GlobalVariables.arrayOfGoods.forEach((ele)=>{
      if(ele[0]==mapValue[0]){
        price = ele[1];
      }
    })
    
    if(action == "sub"){

      if ((mapValue[1]-1) >=0) {

        mapValue[1]--;

        GlobalVariables.popUp--;
      }

    }else if (action == "add"){

      mapValue[1]++;

      GlobalVariables.popUp++
    }

    GlobalVariables.itemsInCartMap.set(keyForMap,[mapValue[0],mapValue[1],price * mapValue[1]]);
  
  }
}
