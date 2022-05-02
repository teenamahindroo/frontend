import { Component, Input } from "@angular/core";
import { Product } from "src/app/shared/models/product.model";
@Component({
  selector: "app-card",
  
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.css"]
})
export class CardComponent {
  @Input()
  public product !: Product;
}