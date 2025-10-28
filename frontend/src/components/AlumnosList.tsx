import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Alumno {
  id: number;
  nombre: string;
  correo: string;
  materiainscrita: string;
}

const AlumnosList: React.FC = () => {
  const [alumnos, setAlumnos] = useState<Alumno[]>([]);
  const API_URL = process.env.REACT_APP_API_URL;

useEffect(() => {
  axios.get(`${API_URL}/api/alumnos`)
    .then(res => setAlumnos(res.data))
    .catch(err => console.error(err));
}, []);

  return (
    <div>
      <h2>Alumnos</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Materia Inscrita</th>
          </tr>
        </thead>
        <tbody>
          {alumnos.map(a => (
            <tr key={a.id}>
              <td>{a.id}</td>
              <td>{a.nombre}</td>
              <td>{a.correo}</td>
              <td>{a.materiainscrita}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AlumnosList;
