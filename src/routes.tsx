import React from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import MapPage from './pages/Map';
import Calculator from './pages/Calculator';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

// O "segurança" que verifica se o utilizador tem sessão iniciada
function RotaProtegida({ children }: { children: React.ReactNode }) {
  const token = localStorage.getItem('viva_token');
  
  if (!token) {
    // Sem token? Redireciona imediatamente para o login
    return <Navigate to="/login" replace />;
  }
  
  return <>{children}</>;
}

export const router = createBrowserRouter([
  // 1. Rotas Públicas (Sem Header/Footer)
  { path: '/login', element: <Login /> },
  { path: '/cadastro', element: <SignUp /> },

  // 2. Rotas Privadas (Com Header/Footer do Layout)
  {
    path: '/',
    element: (
      <RotaProtegida>
        <Layout />
      </RotaProtegida>
    ),
    children: [
      { index: true, element: <Home /> },
      { path: 'mapa', element: <MapPage /> },
      { path: 'alimentacao', element: <Calculator /> },
    ],
  },
  
  // Redireciona qualquer rota inválida de volta para a raiz
  { path: '*', element: <Navigate to="/" replace /> },
]);