import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DocentesModule } from './docentes/docentes.module';
import { AlumnosModule } from './alumnos/alumnos.module';
import { Docente } from './docentes/docente.entity';
import { Alumno } from './alumnos/alumno.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'Sentinela170204',
      database: 'asesorias',
      entities: [Docente, Alumno],
      synchronize: true, // solo para desarrollo
    }),
    DocentesModule,
    AlumnosModule,
  ],
})
export class AppModule {}
