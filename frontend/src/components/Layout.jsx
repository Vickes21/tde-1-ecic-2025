import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

/**
 * Componente Layout
 * 
 * Define a estrutura básica do layout da aplicação, incluindo a barra lateral de navegação
 * e o conteúdo principal que será renderizado através do Outlet do React Router
 */
const Layout = () => {
  return (
    <div className="flex min-h-screen bg-gray-50 w-full">
      {/* Barra de navegação lateral */}
      <Sidebar />
      {/* Área principal onde o conteúdo das rotas será renderizado */}
      <main className="flex-1 p-6 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
