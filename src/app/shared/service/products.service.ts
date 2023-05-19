import { Injectable } from '@angular/core';
import { Iproduct } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  productArray:Iproduct[]=[
    {
      pname :"Samsung M31",
      pid : 1,
      pStatus : "In progress",
      canReturn : 1

    },
    {
      pname :"Iphone",
      pid : 2,
      pStatus : "Dispatched",
      canReturn : 1

    },
    {
      pname :"MackBook",
      pid : 3,
      pStatus : "Delivered",
      canReturn : 0
      
    }
]

  constructor() { }

  getAllUsers():Iproduct[]{
  return this.productArray
  }
   
  getProduct(id:number){
    return this.productArray.find(prod => prod.pid === id)!
  }

  UpdateProduct(prodObject : Iproduct){
   this.productArray.forEach(prod=>{
    if(prodObject.pid === prod.pid){
      prod.pname = prodObject.pname;
      prod.pStatus = prodObject.pStatus
    }
   })
  }
}