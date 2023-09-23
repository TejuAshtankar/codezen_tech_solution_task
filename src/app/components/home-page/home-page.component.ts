import { Component, OnInit } from '@angular/core';
import { ProductListService } from 'src/app/services/product-list.service';
import {faStar} from '@fortawesome/free-solid-svg-icons';
import { CartService } from 'src/app/services/cart.service';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit{
  faStar=faStar;
  productId:number | undefined;
constructor(private productListService:ProductListService, private cartService:CartService){};
productList:any;
ngOnInit(): void {
 this.productListService.getAllProductList().subscribe((r)=>{
  this.productList= Object.values(r);

  })
}

onAddToCart(item:any){
  this.cartService.addToCart(item);
  
  
  
}

}
