import { Injectable } from '@nestjs/common';

@Injectable()
export class ItemService {

    async createItem(){
        return { message: "Item Created"}
    }

    async getItems(){
        return { message: "Item List"}
    }

    async editItem(){
        return { message: "Item Edited"}
    }

    async deleteItem(){
        return { message: "Item Deleted"}
    }
}
