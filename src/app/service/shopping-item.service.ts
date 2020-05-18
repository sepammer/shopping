import { Injectable } from '@angular/core';
import {ShoppingItem, Shoppinglist} from "../shared/shopping-list";
import {HttpClient} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';

@Injectable({providedIn: 'root'})

export class ShoppingItemService {

   private api = 'http://shopping.s1710456024.student.kwmhgb.at/api';
   shoppingitems: ShoppingItem[];


    constructor(private http: HttpClient) {
        this.shoppingitems =[
            new ShoppingItem("12","1","Quargel",12,1,20),
            new ShoppingItem("13","1","Schlierbacher",12,1,20)
        ];


    }

    getItemsByList(){
        return this.http.get(`${this.api}/items{list_id}`)
            .pipe(retry(3)).pipe(catchError(this.errorHandler));
    }

    deleteItem(id:string){
        return this.http.delete(`${this.api}/item/${id}`)
            .pipe(retry(3)).pipe(catchError(this.errorHandler));
    }



    getItems() {
        return this.http.get(`${this.api}/items`)
            .pipe(retry(3)).pipe(catchError(this.errorHandler));
    }

    create(shoppingItem: ShoppingItem): Observable<any>{
        return this.http.post(`${this.api}/item`, shoppingItem)
            .pipe(retry(3)).pipe(catchError(this.errorHandler));
    }


    private errorHandler(error: Error | any): Observable<any>{
        return throwError(error);
    }


}