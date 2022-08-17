import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class dog{
  @PrimaryGeneratedColumn()
  id: string;
  nome: string;
  raca: string;
  idade: number;
}
