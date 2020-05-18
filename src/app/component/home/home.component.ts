import { Component, OnInit } from '@angular/core';
import {Shoppinglist} from "../../shared/shopping-list";
import {AuthService} from "../../service/authentication.service";
import {LoginComponent} from "../login/login.component";

@Component({
  selector: 'bs-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
    title = 'ShoppingList';
    listOn = true;
    detailOn = false;
    shoppinglist: Shoppinglist;

    constructor(private as: AuthService) {
    }

    ngOnInit(): void {
        console.log("Hallo zur Covid-19 Shoppinghilfe!")
    }

    showList() {
        this.listOn = true;
        this.detailOn = false;
    }

    showDetail(shoppinglist: Shoppinglist) {
        this.shoppinglist = shoppinglist;
        this.listOn = false;
        this.detailOn = true;

    }

    isType(){
        return localStorage.getItem("type");
    }

    isLoggedIn(){
        return !!localStorage.getItem("token");
    }


    logout(){
        this.listOn = true;
        this.detailOn = false;
        this.as.logout();
    }

}