import React from 'react';
import AlumnosList from '../components/AlumnosList';

const AlumnosPage: React.FC = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Alumnos</h1>
      <AlumnosList />
    </div>
  );
};

export default AlumnosPage;
