import { Body, Controller, Delete, Get, Param, Patch, Post, Query, UseGuards } from '@nestjs/common';
import { ItemService } from './item.service';
import { JwtGuard } from 'src/user/guards';
import { GetUser } from 'src/user/decorators';
import { EditItemDto, ItemDto } from './dto';


@UseGuards(JwtGuard)
@Controller('item')
export class ItemController {

    
    constructor(private itemService: ItemService){}

    @Post('create/:activityId')
    async createItems(@GetUser('id') userId: string, @Param('activityId') activityId: string, @Body() items: ItemDto[]){
        return this.itemService.createItems(userId, activityId, items)
    }

    @Post('create/')
    async createItemsNoActivity(@GetUser('id') userId: string, @Body() items: ItemDto[]){

        return this.itemService.createItemsNoActivity(userId, items)
    }

    @Get('all/:activityId')
    async getItemsByActivity(@Param('activityId') activityId: string){
        return this.itemService.getItemsByActivity(activityId)
    }

    @Get('all')
    async getItemsByUser(@Query('noActivity') query: string, @GetUser('id') userId: string){
        return this.itemService.getItemsByUser(userId, query)
    }

    @Patch('edit/:itemId')
    async editItem(@Param('itemId') itemId: string, @Body() item: EditItemDto){
        return this.itemService.editItem(itemId, item)
    }

    @Delete('delete/:itemId')
    async deleteItem(@Param('itemId') itemId: string){
        return this.itemService.deleteItem(itemId)
    }
}
