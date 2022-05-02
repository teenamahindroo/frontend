import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Product } from "../models/product.model";

@Injectable()
export class ProductService {
    constructor(private readonly http: HttpClient){}
    getProducts():Observable<Product[]> {
        const url="https://localhost:44341/Product/GetAllProducts";
        const res=this.http.get<Product[]>(url);
        return res;
        // //return [
        //     {
        //         brandName: "oriflame",
        //         productName: "UVedge",
        //         price: 500,
        //         imgUrl: "https://unsplash.it/200/150",
        //         description:
        //             "UVedge is formulated to suit oily to all skin types wid SPF 50",
        //         color: "#9dd9bd"
        //     },
        //     {
        //         brandName: "Gucchi",
        //         productName: "top",
        //         price: 4000,
        //         imgUrl: "https://unsplash.it/201/150",
        //         description: "A beautiful cotton top ",
        //         color: "black"
        //     },
        //     {
        //         brandName: "Rado",
        //         productName: "watch",
        //         price: 10000,
        //         imgUrl: "https://unsplash.it/202/150",
        //         description: "a Wrist band with black color looks good when u wear it  ",
        //         color: "#cc232a"
        //     },
        //     {
        //         brandName: "Samsung",
        //         productName: "S20",
        //         price: 80000,
        //         imgUrl: "https://unsplash.it/203/150",
        //         description:
        //             "Samsung Galaxy S20 is powered by a 2GHz octa-core Samsung Exynos 990 processor ",
        //         color: "#034ea2"
        //     }
        // ];

    }
}