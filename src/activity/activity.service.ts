import { Injectable } from '@nestjs/common';

@Injectable()
export class ActivityService {

    async createActivity(){
        return { message: "Activity Created"}
    }

    async getActivities(){
        return { message: "Activity List"}
    }

    async editActivity(){
        return { message: "Activity Edited"}
    }

    async deleteActivity(){
        return { message: "Activity Deleted"}
    }
}
