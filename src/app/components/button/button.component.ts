import {Component} from "@angular/core";
@Component({
    selector:"app-btn",
    templateUrl:"./button.component.html",
    styleUrls:["./button.component.css"]
})
export class ButtonComponent
{
    public onClick()
     {
        console.log("button clicked");
      }
}