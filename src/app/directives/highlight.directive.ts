import { Directive, ElementRef, HostListener } from "@angular/core";
@Directive({
  selector: "[appHighlight]"
})
export class HighlightDirective {
  constructor(element: ElementRef) {
    this.el = element;
  }
  private el: ElementRef;

  @HostListener("mouseenter")
  public onMouseEnter() {
    this.el.nativeElement.style.backgroundColor = "blue";
  }

  @HostListener("mouseleave")
  public onMouseLeave() {
    this.el.nativeElement.style.backgroundColor = "";
  }
}
