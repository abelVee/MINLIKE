import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Docente } from './docente.entity';

@Injectable()
export class DocentesService {
  constructor(
    @InjectRepository(Docente)
    private readonly repo: Repository<Docente>,
  ) {}

  findAll() {
    return this.repo.find();
  }

  create(docente: Partial<Docente>) {
    return this.repo.save(this.repo.create(docente));
  }
}
