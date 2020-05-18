
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ShoppingListComponent} from "./component/shopping-list/shopping-list.component";
import {ShoppinglistDetailComponent} from "./component/shopping-list-detail/shopping-list-detail.component";
import {HomeComponent} from "./component/home/home.component";
import {ListFormComponent} from "./component/list-form/list-form.component";
import {ItemFormComponent} from "./component/item-form/item-form.component";
import {LoginComponent} from "./component/login/login.component";

const routes: Routes = [
    {  path: '', redirectTo: 'home', pathMatch: 'full' },
    {  path: 'home', component: HomeComponent },
    {  path: 'lists', component: ShoppingListComponent },
    {  path: 'editList', component: ListFormComponent},
    {  path: 'editItem', component: ItemFormComponent},
    {  path: 'login', component: LoginComponent}
];
@NgModule({
    imports: [RouterModule.forRoot(routes)], exports: [RouterModule],
    providers: []
})
export class AppRoutingModule { }
