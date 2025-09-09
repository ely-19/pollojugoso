import React from 'react';
import { Phone, MapPin, Clock, Mail, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Información de contacto */}
          <div>
            <h3 className="text-xl font-bold mb-4">🍗 El Pollo Jugoso</h3>
            <p className="text-gray-300 mb-4">
              El mejor pollo asado de la ciudad con nuestras especias secretas que han deleitado a miles de familias.
            </p>
            <div className="space-y-2">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                <span>+56 9 2610 6974</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                <span>Los Peumos 402, Cerro Esperanza</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                <span>cecicruzmiranda@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Horarios */}
          <div>
            <h3 className="text-xl font-bold mb-4">Horarios de Atención</h3>
            <div className="space-y-2 text-gray-300">
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                <span>Martes a Domingo</span>
              </div>
              <p>12:00 - 15:00 y 17:00 - 23:00</p>
        
            </div>
          </div>

          {/* Redes sociales */}
          <div>
            <h3 className="text-xl font-bold mb-4">Síguenos</h3>
            <p className="text-gray-300 mb-4">
              Mantente al día con nuestras promociones y novedades
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/elpollojugoso_oficial?igsh=emZ1azFpeHN3cjRk"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-pink-600 p-2 rounded-full hover:bg-pink-700 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.facebook.com/share/17AXyueuYX/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 p-2 rounded-full hover:bg-blue-700 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2024 El Pollo Jugoso. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
