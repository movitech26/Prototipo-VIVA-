import React from 'react';
import { createHashRouter, Navigate } from 'react-router-dom';

import Layout from './components/Layout';
import Home from './pages/Home';
import MapPage from './pages/Map';
import Calculator from './pages/Calculator';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

// Proteção das rotas privadas
function RotaProtegida({ children }: { children: React.ReactNode }) {
  const token = localStorage.getItem('viva_token');

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
}

export const router = createHashRouter([
  // Rotas públicas
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/cadastro',
    element: <SignUp />,
  },

  // Rotas privadas
  {
    path: '/',
    element: (
      <RotaProtegida>
        <Layout />
      </RotaProtegida>
    ),
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'mapa',
        element: <MapPage />,
      },
      {
        path: 'alimentacao',
        element: <Calculator />,
      },
    ],
  },

  // Qualquer rota inválida volta para a página inicial
  {
    path: '*',
    element: <Navigate to="/" replace />,
  },
]);


