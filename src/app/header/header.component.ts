import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector: 'app-header',
    templateUrl:'./header.component.html',
    
})

export class HeaderComponent{
    collapsed = true;
    // Event Emitter for selecting headers ie Recipes or Shopping-list items
    @Output() featureSelected = new EventEmitter<string>();


    constructor(){}
    ngOnInit(){}

    onSelect(feature:string){
        this.featureSelected.emit(feature);
    }
}