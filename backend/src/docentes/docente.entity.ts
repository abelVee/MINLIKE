import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Docente {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  correo: string;

  @Column()
  materia: string;
}
