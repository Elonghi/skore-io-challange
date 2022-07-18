import { ApiProperty } from "@nestjs/swagger";
import { Role } from "../entities/roles.enum";

export class CreateUserDto {
    @ApiProperty()
    name: string;
    
    @ApiProperty()
    role: Role[];

    @ApiProperty()
    userToken: string;
    
    @ApiProperty()
    contentsWatched: string[];
}
