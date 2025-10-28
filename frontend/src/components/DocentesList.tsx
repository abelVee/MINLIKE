import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Docente {
  id: number;
  nombre: string;
  correo: string;
  materia: string;
}

const DocentesList: React.FC = () => {
  const [docentes, setDocentes] = useState<Docente[]>([]);
  const API_URL = process.env.REACT_APP_API_URL;
  
  useEffect(() => {
   axios.get(`${process.env.REACT_APP_API_URL}/api/docentes`)
  .then(res => setDocentes(res.data))
  .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>Docentes</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Materia</th>
          </tr>
        </thead>
        <tbody>
          {docentes.map(d => (
            <tr key={d.id}>
              <td>{d.id}</td>
              <td>{d.nombre}</td>
              <td>{d.correo}</td>
              <td>{d.materia}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DocentesList;
