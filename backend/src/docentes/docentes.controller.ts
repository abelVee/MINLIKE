import { Controller, Get, Post, Body } from '@nestjs/common';
import { DocentesService } from './docentes.service';
import { Docente } from './docente.entity';

@Controller('api/docentes')
export class DocentesController {
  constructor(private readonly service: DocentesService) {}

  @Get()
  getAll() {
    return this.service.findAll();
  }

  @Post()
  create(@Body() docente: Docente) {
    return this.service.create(docente);
  }
}
