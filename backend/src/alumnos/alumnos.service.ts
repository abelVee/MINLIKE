import { Injectable } from '@nestjs/common';
import { Alumno } from './alumno.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AlumnosService {
  constructor(
    @InjectRepository(Alumno)
    private alumnosRepository: Repository<Alumno>,
  ) {}

  // Obtener todos los alumnos
  findAll(): Promise<Alumno[]> {
    return this.alumnosRepository.find();
  }

  // Crear un nuevo alumno
  create(alumno: Alumno): Promise<Alumno> {
    return this.alumnosRepository.save(alumno);
  }
}
