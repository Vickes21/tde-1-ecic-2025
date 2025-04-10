import { Link } from 'react-router-dom';

/**
 * Componente Sidebar
 * 
 * Barra lateral de navegação da aplicação que exibe o logo e links de navegação
 */
const Sidebar = () => {
  return (
    <div className="h-screen w-64 bg-primary-800 text-white flex flex-col shadow-lg">
      {/* Cabeçalho com o nome da aplicação */}
      <div className="bg-primary-600 text-white py-4 text-center font-bold tracking-wider uppercase">
        <Link to="/" className="text-xl font-bold text-">PRODUTOS</Link>
      </div>
      
      {/* Links de navegação */}
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          <li>
            <Link 
              to="/" 
              className="flex items-center p-2 rounded-lg hover:bg-primary-700 transition-colors duration-200"
            >
              <span className="ml-3">Produtos</span>
            </Link>
          </li>
          <li>
            <Link 
              to="/about-author" 
              className="flex items-center p-2 rounded-lg hover:bg-primary-700 transition-colors duration-200"
            >
              <span className="ml-3">Sobre o Autor</span>
            </Link>
          </li>
          {/* Adicione mais links de navegação conforme necessário */}
        </ul>
      </nav>
      
      {/* Rodapé da sidebar (opcional) */}
      <div className="p-4 border-t border-primary-700 text-sm text-primary-300 text-black">
        <p>&copy; 2025 Vitor</p>
      </div>
    </div>
  );
};

export default Sidebar;
