import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Alumno {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  correo: string;

  @Column({ nullable: true })
  materiainscrita: string;
}
