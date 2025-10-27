import React from 'react';
import DocentesList from '../components/DocentesList';

const DocentesPage: React.FC = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Docentes</h1>
      <DocentesList />
    </div>
  );
};

export default DocentesPage;
