import {Directive, ElementRef, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appNavBarDropdown]'
})
export class NavBarDropdownDirective {
@HostBinding('class.collapse') collapse = true;
@HostListener('document:click', ['$event']) toggleOpen(event: Event) {
  const el = ((event.target as Element).className);
  this.collapse = el === 'navbar-toggler-icon' ? !this.collapse : true;
}
}
