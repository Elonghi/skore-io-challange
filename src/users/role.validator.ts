import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User, UserDocument } from "./entities/user.entity";

export class RoleValidator {

    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

    validateRole(role) {
        console.log(this.userModel.find());
    }
}