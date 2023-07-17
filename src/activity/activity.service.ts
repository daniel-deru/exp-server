import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateActivityDto } from './dto';

@Injectable()
export class ActivityService {

    constructor(private prisma: PrismaService){}

    async createActivity(userId: string, activity: CreateActivityDto){
        const newActivity = await this.prisma.activity.create({
            data: {
                userId,
                ...activity
            }
        })

        return newActivity
    }

    async startActivity(userId: string, activityId: string){
        const activityFound = await this.prisma.activity.findUnique({
            where: {
                id: activityId
            }
        })

        if(!activityFound || activityFound.userId !== userId) return new ForbiddenException("Access Denied")

        return await this.prisma.activity.update({
            where: {
                id: activityId
            },
            data: {
                startTime: new Date(),
                status: "Active"
            }
        })
    }

    async finishActivity(userId: string, activityId: string){
        const activityFound = await this.prisma.activity.findUnique({
            where: {
                id: activityId
            }
        })

        if(!activityFound || activityFound.userId !== userId) return new ForbiddenException("Access Denied")

        return await this.prisma.activity.update({
            where: {
                id: activityId
            },
            data: {
                endTime: new Date(),
                status: "Finished"
            }
        })
    }

    async getActivities(userId: string, query: string){
        return await this.prisma.activity.findMany({
            where: {
                userId
            },
            include: {
                items: query === 'true' ? true : false
            }
        })
    }

    async editActivity(userId: string, activityId: string, activity: CreateActivityDto){
        const activityFound = await this.prisma.activity.findUnique({
            where: {
                id: activityId
            }
        })

        if(!activityFound || activityFound.userId !== userId) return new ForbiddenException("Access Denied")

        return await this.prisma.activity.update({
            where: {
                id: activityId
            },
            data: {
                ...activity
            }
        })
    }

    async deleteActivity(userId: string, activityId: string){
        const activityFound = await this.prisma.activity.findUnique({
            where: {
                id: activityId
            }
        })

        if(!activityFound || activityFound.userId !== userId) throw new ForbiddenException("Access Denied")

        return await this.prisma.activity.delete({
            where: {
                id: activityId
            }
        })
    }
}
