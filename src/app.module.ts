import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ActivityModule } from './activity/activity.module';
import { ItemModule } from './item/item.module';
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { PrismaMongoModule } from './prisma-mongo/prisma-mongo.module';
import { DecisionModule } from './decision/decision.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ActivityModule, 
    ItemModule, 
    UserModule, 
    PrismaModule, PrismaMongoModule, DecisionModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
