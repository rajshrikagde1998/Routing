import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Iproduct } from 'src/app/shared/model/product';
import { ProductsService } from 'src/app/shared/service/products.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  productId ! : number
  prodObj ! : Iproduct
  constructor(
    private _router : ActivatedRoute,
    private _productService : ProductsService,
    private _route :Router
  ) { }

  ngOnInit(): void {
    // this.productId =+this._router.snapshot.params["id"]
    this._router.params
         .subscribe((res)=>{
           this.productId =+res['productId']
           console.log(this.productId);
           this.prodObj = this._productService.getProduct(this.productId)
           
         })
      
  }

  goToEditPro(){
  this._route.navigate(['/products',this.productId,'edit'],{
    queryParamsHandling :"preserve"
  })
  }

}


