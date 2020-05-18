import { ShoppingItem } from "./shopping-item";

export class ItemFactory {

    static empty(): ShoppingItem {
        return new ShoppingItem(null, '', '', null, null, null);
        // , []
    }

    static fromObject(rawItem: any): ShoppingItem {
        return new ShoppingItem(
            rawItem.id,
            rawItem.user_id,
            rawItem.title,
            rawItem.price,
            rawItem.quantity,
            rawItem.maxPrice,

        );


    }

}