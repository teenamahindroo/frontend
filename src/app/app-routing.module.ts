import { NgModule } from "@angular/core";
import { RouterModule, Route } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { ProductDetailComponent } from "./pages/product-detail/product-detail.component";
const routes: Route[] = [
  { path: "", component: HomeComponent },
  { path: "product/:productId", component: ProductDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
