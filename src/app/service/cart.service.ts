import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { AnonymousSubject } from 'rxjs/internal/Subject';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  addtoCart(item: any) {
    throw new Error('Method not implemented.');
  }
  getTotalPrice(): number {
    throw new Error('Method not implemented.');
  }

  constructor(private http:HttpClient) { }

  getproducts(){
    return this.http.get<any>("http://localhost:3000/product")
    .pipe(map((res:any)=>{
      return res;

    }))
  }
}
