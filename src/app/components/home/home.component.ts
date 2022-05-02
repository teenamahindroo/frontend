import {Component} from "@angular/core";
import { Product } from "src/app/shared/models/product.model";
import { ProductService } from "src/app/shared/services/product.service";

@Component({
    selector:"app-home",
    templateUrl:"./home.component.html",
    styleUrls:["./home.component.css"]
})
export class HomeComponent{
    constructor(private productService:ProductService){
    }
    products !:Product[];
    ngOnInit(){
      this.productService.getProducts().subscribe({
        next: (products) => {
          this.products=products
        }
      })
    }
}