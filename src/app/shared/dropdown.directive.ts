import { Directive, HostListener, OnInit, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective implements OnInit {
  @HostBinding('class.open') toggle = false;
  @HostListener('click') dropdownClick() {
    this.toggle = !this.toggle;
  }

  constructor() {}
  ngOnInit() {}
}
