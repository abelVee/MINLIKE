import { Controller, Get, Post, Body } from '@nestjs/common';
import { AlumnosService } from './alumnos.service';
import { Alumno } from './alumno.entity';

@Controller('api/alumnos')
export class AlumnosController {
  constructor(private readonly alumnosService: AlumnosService) {}

  @Get()
  findAll(): Promise<Alumno[]> {
    return this.alumnosService.findAll();
  }

  @Post()
  create(@Body() alumno: Alumno): Promise<Alumno> {
    return this.alumnosService.create(alumno);
  }
}
