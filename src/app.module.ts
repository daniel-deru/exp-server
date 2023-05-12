import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ActivityModule } from './activity/activity.module';
import { ItemModule } from './item/item.module';

@Module({
  imports: [ActivityModule, ActivityModule, ItemModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
