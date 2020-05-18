import { Injectable } from '@angular/core';
import {ShoppingItem, Shoppinglist} from "../shared/shopping-list";
import {HttpClient} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';

@Injectable({providedIn: 'root'})

export class ShoppingListService {

   private api = 'http://shopping.s1710456024.student.kwmhgb.at/api';
    shoppinglists: Shoppinglist[];

   // constructor(private http: HttpClient) {
  //  }

    constructor(private http: HttpClient) {
        this.shoppinglists = [];

    }

    getShoppingListsById(id : string) : Shoppinglist{
        return this.shoppinglists.find(shoppingList => shoppingList.id === id);
    }

    create(shoppingList: Shoppinglist): Observable<any>{
        return this.http.post(`${this.api}/lists`, shoppingList)
            .pipe(retry(3)).pipe(catchError(this.errorHandler));
    }

    getAll(){
        return this.shoppinglists;
    }

    getShoppinglists() {
        return this.http.get(`${this.api}/lists`)
            .pipe(retry(3)).pipe(catchError(this.errorHandler));
    }

    updateShoppinglist(id:string){
        return this.http.delete(`${this.api}/lists/${id}`)
            .pipe(retry(3)).pipe(catchError(this.errorHandler));
    }


    deleteList(id:string){
        return this.http.delete(`${this.api}/list/${id}`)
            .pipe(retry(3)).pipe(catchError(this.errorHandler));
    }


    private errorHandler(error: Error | any): Observable<any>{
        return throwError(error);
    }


}