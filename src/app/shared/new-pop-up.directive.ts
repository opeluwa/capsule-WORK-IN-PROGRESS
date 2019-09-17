import {Directive, ElementRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appNewPopUpPlaceHolder]'
})
export class NewPopUpDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
