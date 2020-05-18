import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ShoppingItem, } from "../../shared/shopping-item";
import {ShoppingListService} from "../../service/shopping-list.service";
import {ShoppingItemService} from "../../service/shopping-item.service";
import {Shoppinglist} from "../../shared/shopping-list";



@Component({
    selector: 'bs-shopping-item',
    templateUrl: './shopping-item.component.html',
    styles: []
})


export class ShoppingItemComponent implements OnInit {

    items:ShoppingItem[];

    $saveID = localStorage.getItem('saveID');

    @Output() showItemEvent = new EventEmitter<ShoppingItem>();
    @Output() deleteItemEvent = new EventEmitter<ShoppingItem>();

   // list_id = this.shoppinglist.id;
    constructor(private si: ShoppingItemService, private ss: ShoppingListService) { }

    ngOnInit() {
        this.si.getItems().subscribe(
            res => {
                this.items = res;
                console.log(this.items)
            });


        this.items = [
            new ShoppingItem("1", "1","Tennisschläger", 100, 1,200),
            new ShoppingItem("1", "1","Tennisbälle", 50, 1,70),
            new ShoppingItem("1", "2","Golfschläger", 200, 1,300),
        ];

    }

    showItem(item: ShoppingItem){
        console.log("Details!");
        this.showItemEvent.emit(item);
    }

    showItemByList(list_id: number){
        console.log("Items of List");
        this.showItemEvent.emit();
    }

    deleteItem(id: string){
    if(confirm("Item wirklich löschen?")){
      this.si.deleteItem(id).subscribe();
      this.items = this.items.filter(function(el) { return el.id != id; });
}

            }


}