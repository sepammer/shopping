import { Shoppinglist, ShoppingItem } from "./shopping-list";

export class ShoppinglistFactory {

    static empty(): Shoppinglist {
        return new Shoppinglist(null, 1, '', new Date(), '', new Date(), new Date());
        // , []
    }

    static fromObject(rawShoppinglist: any): Shoppinglist {
        return new Shoppinglist(
            rawShoppinglist.id,
            rawShoppinglist.user_id,
            rawShoppinglist.title,
            typeof(rawShoppinglist.dueDate) === 'string' ? new Date(rawShoppinglist.dueDate) : rawShoppinglist.dueDate,
            rawShoppinglist.feedback,
            typeof(rawShoppinglist.created_at) === 'string' ? new Date(rawShoppinglist.created_at) : rawShoppinglist.created_at,
            typeof(rawShoppinglist.updated_at) === 'string' ? new Date(rawShoppinglist.updated_at) : rawShoppinglist.updated_at,
            rawShoppinglist.item,
        );
    }
}