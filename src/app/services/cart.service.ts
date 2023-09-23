import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
 
  public behaviourSubject=new BehaviorSubject<any>([]);
public cartItemList:any=[];
  
  constructor(private http:HttpClient) { }

  getProducts(){
 return this.behaviourSubject.asObservable();
  }

  

  addToCart(product:any){
    this.cartItemList.push(product);
    this.behaviourSubject.next(this.cartItemList);
  }

  removeCartItem(product:any){
    this.cartItemList.map((a:any,index:any)=>{ 
      if(product.id === a.id){
        this.cartItemList.splice(index,1)
      }
    })

  }

}
