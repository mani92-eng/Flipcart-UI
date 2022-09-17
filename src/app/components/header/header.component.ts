import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
public totalItem :number=0;
  constructor(private api :ApiService) { }

  ngOnInit(): void {
    this.api.getproduct().subscribe(res=>{
      this.totalItem = res.length;
    } )   
    
  }

}
