import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { DogsService } from './dogs.service';
import { CreateDogDto } from './dto/dogs.dto';

// DogService dogService = new DogService();

@Controller('dogs')
export class DogsController {
  constructor(private dogsService: DogsService) {}

  @Get()
  findAll(): CreateDogDto[] {
    return this.dogsService.findAll();
  }

  @Get(':id')
  getOne(@Param() params): string {
    return `encontrei o bichano com id ${params.id}`;
  }

  @Get('find/:id')
  findOneMore(@Param('id') id: number) {
    return this.dogsService.findOne(id);
  }

  @Post()
  async create(@Body() createDogDto: CreateDogDto) {
    // return `estou criando um dog de ${createDogDto.age}
    // anos chamado ${createDogDto.name}`;
    this.dogsService.create(createDogDto);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updateDog: CreateDogDto) {
    this.dogsService.update(updateDog, id);
  }

  @Delete(':id')
  delete(@Param('id') id: number): string {
    return 'delete dog';
  }
}
