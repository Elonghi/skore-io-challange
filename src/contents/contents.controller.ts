import { Controller, Get, Post, Body, Patch, Param, Delete, SetMetadata, Query } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Role } from 'src/users/entities/roles.enum';
import { Roles } from 'src/users/roles.decorator';
import { ContentsService } from './contents.service';
import { CreateContentDto } from './dto/create-content.dto';
import { UpdateContentDto } from './dto/update-content.dto';

@Controller('contents')
@ApiTags('Contents')
export class ContentsController {
  constructor(private readonly contentsService: ContentsService) {}

  @Post()
  @Roles(Role.ADMIN)
  @ApiOperation({ summary: "Cria um novo conteudos " })
  async create(@Body() createContentDto: CreateContentDto) {
    return await this.contentsService.create(createContentDto);
  }

  @Get()
  @ApiOperation({ summary: "Lista todos os conteudos " })
  async findAll() {
    return await this.contentsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: "Procura por um unico conteudo. (Adiciona esta conteudo aos conteudos vizualizados do usuario)" })
  async findOne(@Param('id') id: string, @Query('token') token: string ) {
    return await this.contentsService.findOne(id, token);
  }

  @Patch(':id')
  @ApiOperation({ summary: "Atualiza o conteudo" })
  @Roles(Role.ADMIN)
  async update(@Param('id') id: string, @Body() updateContentDto: UpdateContentDto) {
    return await this.contentsService.update(id, updateContentDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: "Deleta o conteudo" })
  @Roles(Role.ADMIN)
  async remove(@Param('id') id: string) {
    return await this.contentsService.remove(id);
  }
}
