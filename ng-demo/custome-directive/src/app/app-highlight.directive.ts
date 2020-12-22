import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appAppHighlight]',
})
export class AppHighlightDirective {
  constructor(private _eleRef: ElementRef) {
    console.log(_eleRef , " 000000 ");
    _eleRef.nativeElement.style.color = 'red';
  }
}
