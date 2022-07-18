import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from 'src/users/entities/user.entity';
import { UsersModule } from 'src/users/users.module';
import { UsersService } from 'src/users/users.service';
import { CreateContentDto } from './dto/create-content.dto';
import { UpdateContentDto } from './dto/update-content.dto';
import { Content, ContentDocument } from './entities/content.entity';

@Injectable()
export class ContentsService {

  constructor(@Inject(UsersService) private userService: UsersService, @InjectModel(Content.name) private contentModel: Model<ContentDocument>) {  }

  create(createContentDto: CreateContentDto) {

    const type = createContentDto.type.toLocaleLowerCase();

    const typesAllowed = ['video', 'pdf', 'image']

    if(!typesAllowed.includes(type)) {
      throw new HttpException('Type not allowed', HttpStatus.FORBIDDEN);
    };

    const content = new this.contentModel(createContentDto);
    return content.save();
  }

  findAll() {
    return this.contentModel.find();
  }

  async findOne(id: string, token: string) {
    
    try {
      await this.userService.addContentToUser(token, id);
      return await this.contentModel.findById(id)
    } catch {
      throw new HttpException('Id não encontrado', HttpStatus.FORBIDDEN)
    }

  }

  update(id: string, updateContentDto: UpdateContentDto) {
    return this.contentModel.findByIdAndUpdate({
      _id: id,
    }, {
      $set: updateContentDto
    }, {
      new: true,
    })
  }

  remove(id: string) {
    return this.contentModel.deleteOne({
      _id: id
    })
  }
}
