import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductListService {

  constructor(private http:HttpClient) { }
getAllProductList():Observable<any>{
  return this.http.get("http://localhost:3000/products")
}
getProductData(id:any):Observable<any>{ 
return this.http.get(`http://localhost:3000/products/${id}`)
}




}
