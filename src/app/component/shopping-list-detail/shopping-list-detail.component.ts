import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ShoppingItem, Shoppinglist} from "../../shared/shopping-list";
import {ShoppingListService} from "../../service/shopping-list.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ShoppinglistFactory} from "../../shared/list-factory";



@Component({
    selector: 'bs-shopping-list-detail',
    templateUrl: './shopping-list-detail.component.html',
    styles: []
})
export class ShoppinglistDetailComponent implements OnInit {

    @Input()  shoppinglist: Shoppinglist;
    @Output() showListEvent = new EventEmitter<any>();

    constructor(public ss:ShoppingListService) { }


    ngOnInit(): void {
    }

    showShoppinglist(){
        this.showListEvent.emit();
    }




}