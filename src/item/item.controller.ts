import { Controller, Delete, Get, Patch, Post } from '@nestjs/common';
import { ItemService } from './item.service';

@Controller('item')
export class ItemController {

    
    constructor(private itemService: ItemService){}

    @Post()
    async createActivity(){
        return this.itemService.createItem()
    }

    @Get()
    async getActivities(){
        return this.itemService.getItems()
    }

    @Patch()
    async editActivity(){
        return this.itemService.editItem()
    }

    @Delete()
    async deleteActivity(){
        return this.itemService.deleteItem()
    }
}
