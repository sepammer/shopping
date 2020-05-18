import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Shoppinglist, ShoppingItem} from "../../shared/shopping-list";
import {ShoppingListService} from "../../service/shopping-list.service";
import {setClassMetadata} from "@angular/core/src/r3_symbols";

@Component({
    selector: 'bs-shopping-list',
    templateUrl: './shopping-list.component.html',
    styles: []
})
export class ShoppingListComponent implements OnInit {

    shoppinglists:Shoppinglist[];
    @Output() showDetailsEvent = new EventEmitter<Shoppinglist>();
    @Output() $saveID;


    constructor(private ss: ShoppingListService) { }


    ngOnInit()  {


       // this.shoppinglists = this.ss.getShoppinglists();
       this.ss.getShoppinglists().subscribe(
           res => {
                this.shoppinglists = res;
               //console.log(this.shoppinglists)
           });




//this.shoppinglists = this.ss.getAll();



       // ];

    }

    showDetails(shoppinglist: Shoppinglist){
        console.log("Details!");

        this.$saveID = shoppinglist.id;
        localStorage.setItem('saveID',this.$saveID);
        console.log(this.$saveID);
        this.showDetailsEvent.emit(shoppinglist);
    }
    returnListId(shoppinglist: Shoppinglist){

    }
    deleteList(shoppinglist:Shoppinglist) {
        if (confirm("Liste wirklich löschen?")) {
            this.ss.deleteList(shoppinglist.id).subscribe();
            this.shoppinglists = this.shoppinglists.filter(function (el) {
                return el.id != shoppinglist.id;
            });
        }
    }

    isType(){
        return localStorage.getItem("type");
    }


}