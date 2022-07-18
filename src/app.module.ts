import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { getModelToken, MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContentsModule } from './contents/contents.module';
import { User, UserSchema } from './users/entities/user.entity';
import { RoleValidator } from './users/role.validator';
import { RolesGuard } from './users/roles.guard';
import { UsersModule } from './users/users.module';
import { UsersService } from './users/users.service';

@Module({
  imports: [ContentsModule, UsersModule, MongooseModule.forRoot("mongodb+srv://root:Bt4mRmB5p9fyJ2Nq@cluster0.l3nyb.mongodb.net/test")],
  controllers: [AppController],
  providers: [AppService,
    {
      provide: APP_GUARD,
      useClass: RolesGuard
    },
    
  ],
})
export class AppModule {}
