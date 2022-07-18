import { ApiProperty } from "@nestjs/swagger";

export class CreateContentDto {
    @ApiProperty()
    name: string;

    @ApiProperty()
    type: string;

    @ApiProperty()
    description: string;
}
