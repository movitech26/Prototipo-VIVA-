import { createBrowserRouter } from 'react-router';
import Layout from './components/Layout';
import Home from './pages/Home';
import MapPage from './pages/Map';
import Calculator from './pages/Calculator';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: 'mapa', Component: MapPage },
      { path: 'alimentacao', Component: Calculator },
      { path: 'login', Component: Login },
      { path: 'cadastro', Component: SignUp },
    ],
  },
]);
