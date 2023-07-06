import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  productList: any [] = [];
  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.loadAllProducts();
    
  }

  loadAllProducts () {
    this.productService.getAllProducts().subscribe((result:any)=>{
      this.productList = result.data;

    })
  }

 

}
