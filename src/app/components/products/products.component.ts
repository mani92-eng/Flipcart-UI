import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public productlist:any;
  public filterCategory : any

  constructor(private cart:CartService,private api:ApiService) { }

  ngOnInit (): void {
    this.cart.getproducts().subscribe(res=>{
      this.productlist = res;
      this.productlist.forEach((a:any) => {
        Object.assign(a, { quantity:1,total:a.price });
      })
    });
  }

  addtocart(item:any){
    this.api.addtoCart(item);
  }
  }


