import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ItemDto } from './dto/item.dto';

@Injectable()
export class ItemService {

    constructor(private prisma: PrismaService){}

    async createItem(item: ItemDto){
        return await this.prisma.item.create({
            data: {
                ...item
            }
        })
    }

    async createManyItems(items: ItemDto[]){
        return await this.prisma.item.createMany({
            data: {
                ...items
            }
        })
    }

    async getItemsByActivity(activityId: string){
        return await this.prisma.item.findMany({
            where: {
                activityId
            }
        })
    }

    async editItem(itemId: string, item: ItemDto){
        return await this.prisma.item.update({
            where: {
                id: itemId
            },
            data: {
                ...item
            }
        })
    }

    async deleteItem(itemId: string){
        await this.prisma.item.delete({
            where: {
                id: itemId
            }
        })
    }
}
