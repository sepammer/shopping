import {Injectable} from '@angular/core';
import {isNullOrUndefined} from "util";
import {HttpClient} from "@angular/common/http";
import * as decode from 'jwt-decode';
import {retry} from 'rxjs/operators';
//npm install --save-dev jwt-decode
interface User { result: {
        created_at: Date, email: string, id: number, name: string, updated_at: Date
    } }
@Injectable()
export class AuthService {
    private api:string = 'http://shopping.s1710456024.student.kwmhgb.at/api/auth';//'http://localho st:8080/api/auth';
    constructor(private http: HttpClient) { }
    login(email: string, password: string ) {
        return this.http.post(`${this.api}/login`, {'email': email,
            'password': password}); }

    public setLocalStorage(token: string) { console. log("Storing token"); console. log(token);
        const decodedToken = decode(token); //console.log(decodedToken);
        //console.log(decodedToken.user.id);
        //console.log(decodedToken.user);
        console.log(decodedToken);
        localStorage.setItem('token', token);
        localStorage.setItem('userId', decodedToken.user.id);
        localStorage.setItem('type', decodedToken.user.type);
    } logout() {
        this.http.post(`${this.api}/logout`, {}); localStorage. removeItem("token") ; localStorage. removeItem("userId"); console. log("logged out");
    }
    public isLoggedIn() {
        if(!isNullOrUndefined( localStorage.getItem("token"))){
            let token : string = localStorage. getItem("token");
            //console.log(token);
            const decodedToken = decode(token);
            let expirationDate:Date = new Date( 0); expirationDate.setUTCSeconds(decodedToken.exp); if(expirationDate < new Date()){
                console. log("token expired"); localStorage.removeItem("token"); return false;
            }
            return true;
        } else {
            return false;
        }
    }
    isLoggedOut() {
        return !this.isLoggedIn();
    } }
