import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { Product } from "../model/product.model";

@Injectable()
export class GlobalVariablesService {

  private blackBoxVisibility: boolean;

  public getBlackBoxVisibility(): boolean {
    return this.blackBoxVisibility;
  }
  public setBlackBoxVisibility(value: boolean) {
    this.blackBoxVisibility = value;
  }

  private loadingScreenVisibility: boolean;

  public getLoadingScreenVisibility(): boolean {
    return this.loadingScreenVisibility;
  }
  public setLoadingScreenVisibility(value: boolean) {
    this.loadingScreenVisibility = value;
  }

  private goodsCartVisibility: boolean;

  public getGoodsCartVisibility(): boolean {
    return this.goodsCartVisibility;
  }
  public setGoodsCartVisibility(value: boolean) {
    this.goodsCartVisibility = value;
  }

  private arrayOfCounters: number[];

  public getArrayOfCounters(): number[] {
    return this.arrayOfCounters;
  }
  public setArrayOfCounters(value: number[]) {
    this.arrayOfCounters = value;
  }

  private arrayOfGoods: any[];

  public getArrayOfGoods(): any[] {
    return this.arrayOfGoods;
  }
  public setArrayOfGoods(value: any[]) {
    this.arrayOfGoods = value;
  }

  private popUp: number;

  public getPopUp(): number {
    return this.popUp;
  }
  public setPopUp(value: number) {
    this.popUp = value;
  }

  private itemsInCartMap: Map<number, unknown>;

  public getItemsInCartMap(): Map<number, unknown> {
    return this.itemsInCartMap;
  }
  public setItemsInCartMap(value: Map<number, unknown>) {
    this.itemsInCartMap = value;

    this.mapObserver$.next(value);
  }

  private hide: string;

  public getHide(): string {
    return this.hide;
  }
  public setHide(value: string) {
    this.hide = value;
  }

  private show: string;

  public getShow(): string {
    return this.show;
  }
  public setShow(value: string) {
    this.show = value;
  }

  private mapObserver$: Subject<Map<number,unknown>>;

  public getMapObserver$(): Observable<Map<number,unknown>>{

    return this.mapObserver$.asObservable();
  }

  constructor(private http: HttpClient){

    this.blackBoxVisibility = false;

    this.loadingScreenVisibility = false;

    this.goodsCartVisibility = false;

    this.arrayOfCounters = [];

    this.arrayOfGoods = [];
    // [
    //   ["Atlas Copco 4220-0982-15 15 meter Cable", 2000, "./assets/Atlas Cable 1.png"],
    //   ["Atlas Copco 4220-1007-10 10 meter Extension Cable", 2100, "./assets/Atlas Cable 2.png"],
    //   ["Atlas Copco 4200-1010-15 10 meter Extension Cable", 2100, "./assets/Atlas Cable 3.png"],
    //   ["Atlas Copco Nutrunner 1", 3400, "./assets/Atlas ETD inline 1.png"],
    //   ["Atlas Copco Nutrunner 2", 3240, "./assets/Atlas ETD inline 2.png"],
    //   ["Atlas Copco Nutrunner 3", 5000, "./assets/Atlas ETD inline 3.png"],
    // ] ;
  
    this.popUp = 0;
  
    this.itemsInCartMap = new Map();
    
    this.hide = 'hide';
  
    this.show = 'show';

    this.mapObserver$ = new Subject<Map<number,unknown>>();

    this.getProducts().subscribe((prod:Product[])=>{

      console.log(prod);
      this.arrayOfGoods = prod.map((element)=>{


        return Object.values(element);
      })
    })

  }

  getProducts():Observable<Product[]>{
    console.log(this.http.get<Product[]>('/api/products'));
    return this.http.get<Product[]>('/api/products');
  }


  public addNewItemInMap (id:number):void {
    this.itemsInCartMap.set(id, [this.arrayOfGoods[id][0], 1, this.arrayOfGoods[id][1]]);
    // console.log(ShoppingCart.itemsInCartMap);
    this.mapObserver$.next(this.itemsInCartMap);
  }
  
  public modifyExistingItemInMap (id:number, ammountOfCommodity:number):void {
    this.itemsInCartMap.set(id, [this.arrayOfGoods[id][0], ammountOfCommodity, this.arrayOfGoods[id][1] * ammountOfCommodity])
    // console.log(ShoppingCart.itemsInCartMap);
    this.mapObserver$.next(this.itemsInCartMap);
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