import { Module } from '@nestjs/common';
import { ItemController } from './item.controller';
import { ItemService } from './item.service';
import { ActivityService } from 'src/activity/activity.service';

@Module({
  controllers: [ItemController],
  providers: [ItemService],
})
export class ItemModule {}
