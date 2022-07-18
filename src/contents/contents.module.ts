import { Module } from '@nestjs/common';
import { ContentsService } from './contents.service';
import { ContentsController } from './contents.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Content, ContentSchema } from './entities/content.entity';
import { User, UserSchema } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: Content.name, schema: ContentSchema }]), MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])],
  controllers: [ContentsController],
  providers: [ContentsService, UsersService]
})
export class ContentsModule {}
