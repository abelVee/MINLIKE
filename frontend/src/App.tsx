import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import DocentesPage from './pages/DocentesPage';
import AlumnosPage from './pages/AlumnosPage';
import InscripcionesPage from './pages/InscripcionesPage';
import AgregarAlumnoPage from './pages/AgregarAlumnoPage';

function App() {
  return (
    <Router>
      <nav style={{ padding: '10px', backgroundColor: '#eee' }}>
        <Link to="/" style={{ margin: '10px' }}>Home</Link>
        <Link to="/docentes" style={{ margin: '10px' }}>Docentes</Link>
        <Link to="/alumnos" style={{ margin: '10px' }}>Alumnos</Link>
        <Link to="/inscripciones" style={{ margin: '10px' }}>Inscripciones</Link>
        <Link to="/agregar-alumno" style={{ margin: '10px' }}>Agregar Alumno</Link>

      </nav>
      <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/docentes" element={<DocentesPage />} />
        <Route path="/alumnos" element={<AlumnosPage />} />
        <Route path="/inscripciones" element={<InscripcionesPage />} />
        <Route path="/agregar-alumno" element={<AgregarAlumnoPage />} />
      </Routes>
    </Router>
  );
}

export default App;
