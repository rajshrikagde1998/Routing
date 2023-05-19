import { Component, OnInit } from '@angular/core';
import { Iproduct } from '../../model/product';
import { ProductsService } from '../../service/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
 productsData ! :Iproduct[]
  constructor(private _productService : ProductsService) { }

  ngOnInit(): void {
    this.productsData = this._productService.getAllUsers()
  }


}
