import React from 'react';

/**
 * Componente AboutAuthor
 * 
 * Página que exibe informações sobre o autor do projeto
 */
const AboutAuthor = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-primary-800 mb-6">Sobre o Autor</h1>
      
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-1/3">
            <div className="bg-gray-200 rounded-lg w-full aspect-square flex items-center justify-center mb-4">
              <img src="/profile1.jpg" alt="Vitor" className="w-full h-full object-cover rounded-lg" />
            </div>
          </div>
          
          <div className="md:w-2/3">
            <h2 className="text-2xl font-semibold text-primary-800 mb-4">Vitor</h2>
            
            <div className="space-y-4 text-gray-700">
              <p>
                Olá! Sou desenvolvedor de software com experiência em aplicações web modernas.
                Especializado em React, Node.js e arquiteturas de microsserviços.
              </p>
              
              <p>
                Este projeto foi desenvolvido como parte dos meus estudos em desenvolvimento
                de aplicações web com React e tecnologias modernas de frontend.
              </p>
              
              <div className="mt-6">
                <h3 className="text-xl font-medium text-primary-600 mb-3">Habilidades</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm">React</span>
                  <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm">Node.js</span>
                  <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm">JavaScript</span>
                  <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm">TypeScript</span>
                  <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm">Tailwind CSS</span>
                </div>
              </div>
              
              <div className="mt-6">
                <h3 className="text-xl font-medium text-primary-600 mb-3">Contato</h3>
                <div className="space-y-2">
                  <p>Email: v.vitoriano21@gmail.com</p>
                  <p>GitHub: github.com/vickes21</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutAuthor;
