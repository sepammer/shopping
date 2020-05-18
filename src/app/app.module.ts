import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import {ShoppingItem} from "./shared/shopping-item";
import { ShoppingItemComponent } from './component/shopping-item/shopping-item.component';
import { ShoppingListComponent } from './component/shopping-list/shopping-list.component';
import { ShoppinglistDetailComponent } from './component/shopping-list-detail/shopping-list-detail.component';
import {ShoppingListService} from "./service/shopping-list.service";
import { HomeComponent } from './component/home/home.component';
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import {ListFormComponent} from "./component/list-form/list-form.component";
import { ItemFormComponent } from './component/item-form/item-form.component';
import { LoginComponent } from './component/login/login.component';
import {ShoppingItemService} from "./service/shopping-item.service";
import {AuthService} from "./service/authentication.service";

@NgModule({
  declarations: [
    AppComponent,
     // ShoppingItem,
      ShoppingItemComponent,
      ShoppingListComponent,
      ShoppinglistDetailComponent,
      HomeComponent,
      ListFormComponent,
      ItemFormComponent,
      LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
      HttpClientModule,
      ReactiveFormsModule
  ],
  providers: [ShoppingListService, AuthService, ShoppingItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
