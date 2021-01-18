import { Injectable } from "@angular/core";

@Injectable()
export class GlobalVariables{

  public static arrayOfGoods:any[] = 
  [
    ["Atlas Copco 4220-0982-15 15 meter Cable", 2000, "./assets/Atlas Cable 1.png"],
    ["Atlas Copco 4220-1007-10 10 meter Extension Cable", 2100, "./assets/Atlas Cable 2.png"],
    ["Atlas Copco 4200-1010-15 10 meter Extension Cable", 2100, "./assets/Atlas Cable 3.png"],
    ["Atlas Copco Nutrunner 1", 3400, "./assets/Atlas ETD inline 1.png"],
    ["Atlas Copco Nutrunner 2", 3240, "./assets/Atlas ETD inline 2.png"],
    ["Atlas Copco Nutrunner 3", 5000, "./assets/Atlas ETD inline 3.png"],
  ] ;

  public static popUp = 0;

  public static itemsInCartMap = new Map();
  
  public static hide = 'hide';

  public static show = 'show'
}