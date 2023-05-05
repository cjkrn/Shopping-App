import { Directive, HostBinding, HostListener } from "@angular/core"; 

@Directive({
    selector: '[appDropdown]'
})

export class DropdownDirective {
    @HostBinding('class.show') toggleDropdown = false;
    @HostListener("click", ['$event']) toggleOpen(event: Event) {
        console.log("Dropdown clicked")
        this.toggleDropdown = !this.toggleDropdown;
        event.preventDefault();
    }
}