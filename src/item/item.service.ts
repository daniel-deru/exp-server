import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { EditItemDto, ItemDto } from './dto';
import { ActivityService } from 'src/activity/activity.service';

@Injectable()
export class ItemService {

    constructor(private prisma: PrismaService){}

    async createItems(userId: string, activityId: string, items: ItemDto[] | ItemDto){

        if(!Array.isArray(items)){
            const data = {...items, userId, activityId}
            return await this.prisma.item.create({ data })
        }

        items = items.map((item: ItemDto) => ({...item, activityId, userId}))
        return await this.prisma.item.createMany({ data: items })
    }

    async createItemsNoActivity(userId: string, items: ItemDto[] | ItemDto){

        if(!Array.isArray(items)){
            const data = {...items, userId}

            return await this.prisma.item.create({ data })
        }

        items = items.map((item: ItemDto) => ({...item, userId}))
        return await this.prisma.item.createMany({ data: items })
    }

    async getItemsByActivity(activityId: string){
        return await this.prisma.item.findMany({
            where: {
                activityId
            }
        })
    }

    async getItemsByUser(userId: string, noActivity: string){

        let searchParam = { 
            where: { 
                userId,
                activityId: null
            } 
        }

        if(noActivity !== "true") {
            delete searchParam.where.activityId
        }

        return await this.prisma.item.findMany(searchParam)
    }

    async editItem(itemId: string, item: EditItemDto){
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
