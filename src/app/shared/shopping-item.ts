export class ShoppingItem {

    constructor(
        public id:string,
        public list_id:string,
        public title:string,
        public price:number,
        public quantity:number,
        public maxPrice?:number){}

}