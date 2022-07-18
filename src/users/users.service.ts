import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { randomUUID } from 'crypto';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User, UserDocument } from './entities/user.entity';

@Injectable()
export class UsersService {

  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {  }

  create(createUserDto: CreateUserDto) {

    createUserDto.userToken = randomUUID();
    
    const user = new this.userModel(createUserDto);

    return user.save();
  }

  findAll() {
    return this.userModel.find();
  }

  findOne(id: string) {
    return this.userModel.findById(id)
  }

  findByToken(token: string) {
    return this.userModel.find({ userToken: token })
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    console.log(updateUserDto);
    return this.userModel.findByIdAndUpdate({
      _id: id,
    }, {
      $set: updateUserDto
    }, {
      new: true,
    })
  }

  async addContentToUser(id, contentId) {

    const contentExist = await this.userModel.find({'contentsWatched': contentId});

    if(contentExist.length > 0) {
      return false;
    }

    return await this.userModel.findByIdAndUpdate({
      _id: id,
    }, {
      $push: { contentsWatched: contentId }
    }, {
      new: true,
    })
  }

  remove(id: string) {
    return this.userModel.deleteOne({
      _id: id
    })
  }
}
