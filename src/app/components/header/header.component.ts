import { Component, OnInit } from '@angular/core';
import {faUser,faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  faUser=faUser;
  faShoppingCart=faShoppingCart;
  totalItem:number=0;
constructor(private cartService:CartService){}
  ngOnInit(): void {
    this.cartService.getProducts().subscribe((r)=>{
      this.totalItem=r.length
    })
  }

}
