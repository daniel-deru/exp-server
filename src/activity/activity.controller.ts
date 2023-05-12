import { Controller, Post, Get, Patch, Delete } from '@nestjs/common';
import { ActivityService } from './activity.service';

@Controller('activity')
export class ActivityController {

    constructor(private activityService: ActivityService){}

    @Post()
    async createActivity(){
        return this.activityService.createActivity()
    }

    @Get()
    async getActivities(){
        return this.activityService.getActivities()
    }

    @Patch()
    async editActivity(){
        return this.activityService.editActivity()
    }

    @Delete()
    async deleteActivity(){
        return this.activityService.deleteActivity()
    }
}
