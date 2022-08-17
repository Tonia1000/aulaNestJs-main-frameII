import { Injectable } from '@nestjs/common';
import { CreateDogDto } from './dto/dogs.dto';

@Injectable()
export class DogsService {
  private dogs: CreateDogDto[] = [];

  create(dog: CreateDogDto) {
    // inserir no banco de dados usando o repository
    this.dogs.push(dog);
  }

  findAll(): CreateDogDto[] {
    // buscará todos os elementos do bd
    return this.dogs;
  }

  findOne(id: number) {
    const dog = this.dogs.filter((value) => value.id === id);
    return dog; // filter, map
  }

  remove(id: number) {
    const dogs_remove = this.dogs.filter((value) => value.id !== id);
    this.dogs = dogs_remove;
  }

  update(createDogDto: CreateDogDto, id: number) {
    const dog = this.findOne(createDogDto.id);

    // atualizar ele na lista
  }
}
