import { Controller, Post, Get, Patch, Delete, Body, UseGuards, Param, Query } from '@nestjs/common';
import { ActivityService } from './activity.service';
import { CreateActivityDto } from './dto';
import { JwtGuard } from 'src/user/guards';
import { GetUser } from 'src/user/decorators';
// import { Activity } from '@prisma/client';


@UseGuards(JwtGuard)
@Controller('activity')
export class ActivityController {

    constructor(private activityService: ActivityService){}

    @Post('create')
    async createActivity(@GetUser('id') userId: string, @Body() activity: CreateActivityDto){
        return this.activityService.createActivity(userId, activity)
    }

    @Post('start/:id')
    async startActivity(@GetUser('id') userId: string, @Param('id') activityId: string){
        return this.activityService.startActivity(userId, activityId)
    }

    @Post('finish/:id')
    async finishActivity(@GetUser('id') userId: string, @Param('id') activityId: string){
        return this.activityService.finishActivity(userId, activityId)
    }

    @Get('all')
    async getActivities(@Query('includeItems') query: string, @GetUser('id') userId: string){
        return this.activityService.getActivities(userId, query)
    }

    @Get(':id')
    async getActivityById(){

    }

    @Patch('edit/:id')
    async editActivity(@GetUser('id') userId: string, @Param('id') activityId: string, @Body() activity: CreateActivityDto){
        return this.activityService.editActivity(userId, activityId, activity)
    }

    @Delete('delete/:id')
    async deleteActivity(@GetUser('id') userId: string, @Param('id') activityId: string){
        return this.activityService.deleteActivity(userId, activityId)
    }
}
