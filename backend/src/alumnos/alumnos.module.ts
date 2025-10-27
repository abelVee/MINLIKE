import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Alumno } from './alumno.entity';
import { AlumnosService } from './alumnos.service';
import { AlumnosController } from './alumnos.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Alumno])],
  controllers: [AlumnosController],
  providers: [AlumnosService],
})
export class AlumnosModule {}
