import { ActivatedRoute, Router } from '@angular/router'; import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import {ShoppinglistFactory} from "../../shared/list-factory";
import {ShoppingListService} from "../../service/shopping-list.service";
import {Shoppinglist} from "../../shared/shopping-list";
import {ListFormErrorMessages} from "./list-form-error-messages";


@Component({
  selector: 'bs-list-form',
  templateUrl: './list-form.component.html',
  styles: []
})
export class ListFormComponent implements OnInit {

  $date = new Date();
    listForm: FormGroup;
    list = ShoppinglistFactory.empty();
    errors: { [key: string]: string } = {};
    isUpdatingList = false;

    constructor(private fb: FormBuilder, private bs: ShoppingListService,
                private route: ActivatedRoute, private router: Router) {
    }


    ngOnInit() {

        this.initList();
    }

    initList() {
        this.listForm = this.fb.group({
            user_id: '1',
            title: [this.list.title, Validators.required],
            dueDate: [this.list.dueDate, Validators.required],
            feedback: [this.list.feedback],
            updated_at: [this.list.updated_at],
            created_at: [this.list.created_at]
        });
        this.listForm.statusChanges.subscribe(() => this.updateErrorMessages());
    }

    submitForm() {
        this.list.title = this.listForm.value.title;
        this.list.user_id = 1;
        this.list.dueDate = this.listForm.value.dueDate;
        this.list.feedback = this.listForm.value.feedback;
        this.list.created_at = this.listForm.value.created_at;
        this.list.updated_at = this.listForm.value.updated_at;

            this.bs.create(this.list).subscribe(res => {
                this.list = ShoppinglistFactory.empty( ); this.listForm.reset(ShoppinglistFactory.empty());
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
