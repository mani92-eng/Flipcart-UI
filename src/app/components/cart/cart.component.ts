import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';



@Component({
  selector: 'app-cart', 
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public products : any = [];
  public grandTotal !: number;
 


  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.api.getproduct()
    .subscribe(res=>{
      this.products = res;
      this.grandTotal = this.api.getTotalPrice();
    })
  }

  
    removeItem(item: any){
      this.api.removeCartItem(item);

  }

  emptycart(){
    this.api.removeAllCart();
  }
}
