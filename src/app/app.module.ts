import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { ButtonComponent } from './components/button/button.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TableComponent } from './components/table/table.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { HighlightDirective } from './directives/highlight.directive';
import { ProductService } from './shared/services/product.service';
import{HttpClientModule}from '@angular/common/http';
import { TrailComponent } from './components/trial/trail.component';
@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    CardComponent,
    FooterComponent,
    HomeComponent,
    MainComponent,
    NavbarComponent,
    TableComponent,
    ProductDetailComponent,
    TrailComponent,
    HighlightDirective
  ],
    imports: [BrowserModule, AppRoutingModule,HttpClientModule],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
