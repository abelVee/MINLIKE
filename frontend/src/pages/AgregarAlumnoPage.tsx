// src/pages/AgregarAlumnoPage.tsx
import React, { useState } from 'react';
import axios from 'axios';

const AgregarAlumnoPage: React.FC = () => {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [materiainscrita, setMateriaInscrita] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:3001/api/alumnos', {
        nombre,
        correo,
        materiainscrita,
      });

      setMensaje('Alumno agregado correctamente');
      setNombre('');
      setCorreo('');
      setMateriaInscrita('');
    } catch (error) {
      console.error(error);
      setMensaje('Error al agregar alumno');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Agregar Alumno</h1>

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <label>Nombre:</label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>Correo:</label>
          <input
            type="email"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            required
          />
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>Materia Inscrita:</label>
          <input
            type="text"
            value={materiainscrita}
            onChange={(e) => setMateriaInscrita(e.target.value)}
          />
        </div>

        <button type="submit">Agregar Alumno</button>
      </form>

      {mensaje && <p>{mensaje}</p>}
    </div>
  );
};

export default AgregarAlumnoPage;
