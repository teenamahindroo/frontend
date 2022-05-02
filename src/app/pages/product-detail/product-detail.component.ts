import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Product } from "src/app/shared/models/product.model";
import { ProductService } from "src/app/shared/services/product.service";
@Component({
  selector: "app-product-detail",
  templateUrl: "./product-detail.component.html",
  styleUrls: ["./product-detail.component.css"]
})
export class ProductDetailComponent implements OnInit {
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute) {

  }

  product!: Product;

  ngOnInit() {
    this.route.params.subscribe(params => {
      const productId = params["productId"];
      console.log(productId);
    })
    // this.product = this.productService.
  }

}