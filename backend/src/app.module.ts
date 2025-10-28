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
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      entities: [Docente, Alumno],
      synchronize: true, // solo para desarrollo, en producción evalúa poner false
    }),
    DocentesModule,
    AlumnosModule,
  ],
})
export class AppModule {}
