import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { HomePageComponent } from '../home-page/home-page.component';
import {faStar} from '@fortawesome/free-solid-svg-icons';
import { ProductListService } from 'src/app/services/product-list.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css']
})
export class AddToCartComponent implements OnInit {
 productList:any;
 faStar=faStar;

constructor(private productService:ProductListService, private cartService:CartService){}
ngOnInit(): void {
this.cartService.getProducts().subscribe((r)=>{
  this.productList=r
})
}

onRemoveItem(product:any){
this.cartService.removeCartItem(product);
}
}
