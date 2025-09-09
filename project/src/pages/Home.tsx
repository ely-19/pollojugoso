import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Award, Flame, ArrowRight } from 'lucide-react';

const Home = () => {
  const features = [
    {
      icon: Award,
      title: 'Calidad Premium',
      description: 'Pollos frescos y especies seleccionadas para un sabor inigualable'
    },
    {
      icon: Clock,
      title: 'Servicio Rápido',
      description: 'Preparación rápida sin comprometer la calidad de nuestros productos'
    },
    {
      icon: Flame,
      title: 'Receta Secreta',
      description: 'Nuestro adobo especial hace toda la diferencia'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-orange-500 to-yellow-400 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              El Pollo Más Jugoso
              <span className="block text-yellow-200">y Comida Rápida Irresistible</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Disfruta de nuestro pollo asado dorado y crujiente, acompañado de
              papas, hamburguesas y mucho más.
              ¡Sabores que te harán volver por más!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/menu"
                className="bg-yellow-400 text-red-800 hover:bg-yellow-300 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center justify-center"
              >
                Ver Menú
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white hover:bg-white hover:text-red-800 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                Contáctanos
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ¿Por qué elegir nuestro pollo asado?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Años de dedicación y pasión por la cocina nos han convertido en la
              elección favorita de quienes buscan pollo asado jugoso y comida rápida llena de sabor.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 rounded-lg bg-gray-50 hover:shadow-lg transition-shadow">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 text-orange-600 rounded-full mb-4">
                  <feature.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-yellow-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            ¿Listo para disfrutar?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Haz tu pedido ahora y disfruta del mejor pollo asado y comida rapida en la comodidad de tu hogar
          </p>
          <Link
            to="/menu"
            className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-4 rounded-lg font-semibold text-lg inline-flex items-center transition-all duration-300 hover:from-orange-500 hover:to-red-500 hover:shadow-lg hover:shadow-orange-300/50"
          >
            Ordenar Ahora
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
