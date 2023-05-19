import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Iproduct, TpStatus } from 'src/app/shared/model/product';
import { ProductsService } from 'src/app/shared/service/products.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {
  productId ! :number;
  productObj ! :Iproduct;
  canEditProduct ! : number
  constructor(
    private _router :Router,
    private _route : ActivatedRoute,
    private _productService :ProductsService
    ) { }

  ngOnInit(): void {
this._route.params
     .subscribe((params : Params)=>{
      this.productId =+params['productId']
      this.productObj = this._productService.getProduct(this.productId)
     })

     this._route.queryParams
         .subscribe((qp :Params)=>{
          console.log(qp);
          this.canEditProduct =+qp['canEdit']
          
         })

}

UpdateProduct(pname :HTMLInputElement, pstatus : HTMLSelectElement){
let obj:Iproduct ={
  pname: pname.value,
  pStatus: pstatus.value as TpStatus,
  pid: this.productId,
  canReturn:this.productObj.canReturn
}
this._productService.UpdateProduct(obj)
this._router.navigate(['/products',this.productId])

}

}
