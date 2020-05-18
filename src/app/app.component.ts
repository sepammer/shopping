import { Component } from '@angular/core';
import { AuthService} from "./service/authentication.service";

@Component({
    selector: 'bs-root',
    templateUrl: './app.component.html'

})
export class AppComponent {
    title = 'Shoppinglist';

    constructor(private authService: AuthService) { }

    isLoggedIn() {
        return this.authService.isLoggedIn();
    }
    getLoginLabel(){ if(this.isLoggedIn()){
        return "Logout"; } else {
        return "Login"; }
    }

    isType(){
        return localStorage.getItem("type");
    }

}