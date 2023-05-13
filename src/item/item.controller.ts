import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { ItemService } from './item.service';
import { JwtGuard } from 'src/user/guards';
import { GetUser } from 'src/user/decorators';
import { ItemDto } from './dto/item.dto';


@UseGuards(JwtGuard)
@Controller('item')
export class ItemController {

    
    constructor(private itemService: ItemService){}

    @Post('create')
    async createItem(@Body() item: ItemDto){
        return this.itemService.createItem(item)
    }

    @Post('create/many')
    async createManyItems(@Body() items: ItemDto[]){
        return this.itemService.createManyItems(items)
    }

    @Get('all/:id')
    async getItemsByActivity(@Param('id') activityId: string){
        return this.itemService.getItemsByActivity(activityId)
    }

    @Patch('edit/:id')
    async editItem(@Param('id') itemId: string, @Body() item: ItemDto){
        return this.itemService.editItem(itemId, item)
    }

    @Delete('delete/:id')
    async deleteItem(@Param('id') itemId: string){
        return this.itemService.deleteItem(itemId)
    }
}
