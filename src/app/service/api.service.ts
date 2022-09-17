import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public cartItemlist:any=[]
  public productlist=new BehaviorSubject<any>([]);

  constructor() { }
  getproduct(){
   return this.productlist.asObservable()
   
  }
  setproduct(product:any){
    this.cartItemlist.push(...product);
    this.productlist.next(product)
  }
  addtoCart(product:any){
    this.cartItemlist.push(product);
    this.productlist.next(this.cartItemlist);
    this.getTotalPrice();
    console.log(this.cartItemlist)
  

  }

  getTotalPrice() : any{
    let grandTotal = 0;
    this.cartItemlist.map((a:any)=>{
      grandTotal += a.total;
    })
    return grandTotal;
}
removeCartItem(product: any){
  this.cartItemlist.map((a:any, index:any)=>{
    if(product.id=== a.id){
      this.cartItemlist.splice(index,1);
    }
  })
  this.productlist.next(this.cartItemlist);
}
removeAllCart(){
  this.cartItemlist = []
  this.productlist.next(this.cartItemlist);
}
}
