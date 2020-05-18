import { ActivatedRoute, Router } from '@angular/router'; import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import {ItemFactory} from "../../shared/item-factory"
import {ShoppingItemService} from "../../service/shopping-item.service";



//import {ListFormErrorMessages} from "./list-form-error-messages";



@Component({
  selector: 'bs-item-form',
  templateUrl: './item-form.component.html',
  styles: []
})
export class ItemFormComponent implements OnInit {

    $date = new Date();
    $saveID = null;
    itemForm: FormGroup;
    item = ItemFactory.empty();
    errors: { [key: string]: string } = {};

    constructor(private fb: FormBuilder, private bs: ShoppingItemService,
                private route: ActivatedRoute, private router: Router) {
    }


    ngOnInit() {
        this.initItem();
    }

    initItem() {

        this.itemForm = this.fb.group({
            list_id: localStorage.getItem('saveID'),
            title: [this.item.title, Validators.required],
            quantity: [this.item.quantity, Validators.required],
            price: [this.item.price, Validators.required],
            maxPrice: [this.item.maxPrice, Validators.required],

        });
        this.itemForm.statusChanges.subscribe(() => this.updateErrorMessages());
    }

    submitForm() {

        this.item.title = this.itemForm.value.title;

        this.item.list_id = localStorage.getItem('saveID');
        this.item.quantity = this.itemForm.value.quantity;
        this.item.price = this.itemForm.value.price;
        this.item.maxPrice = this.itemForm.value.maxPrice;
        console.log("ITEM: ", this.item);
        this.bs.create(this.item).subscribe(res => {
            this.item = ItemFactory.empty( ); this.itemForm.reset(ItemFactory.empty());
        }); }



    updateErrorMessages() {
        /*this.errors = {};
        for (const message of ListFormErrorMessages) {
            const control = this.listForm.get(message.forControl);
            if (control &&
                control.dirty &&
                control.invalid && control.errors[message.forValidator] && !this.errors[message.forControl]) {
                this.errors[message.forControl] = message.text;
            }
        }*/

    }
}
