import { Routes, Route } from 'react-router-dom';
import { Sesion } from '../views/Sesion';
import { Catalogo } from '../views/Catalogo';
export const Rutas = () => {
  return (
    <Routes>
      <Route path='/sesion' element={<Sesion />} />
      <Route path='/*' element={<Sesion />} />
      <Route path='/catalogo' element={<Catalogo />} />
      <Route path='/' element={<Catalogo />} />
    </Routes>
  );
};
