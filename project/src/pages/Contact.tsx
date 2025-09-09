import React from 'react';
import { Phone, MapPin, Clock, Instagram, Facebook, Mail } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Teléfono',
      info: '+56 9 2610 6974',
      description: 'Llámanos para hacer tu pedido'
    },
    {
      icon: MapPin,
      title: 'Ubicación',
      info: 'Los Peumos 402, Cerro Esperanza',
      description: 'Encuéntranos en el corazón de la ciudad'
    },
    {
      icon: Clock,
      title: 'Horarios',
      info: 'Martes a Domingo: 12:00 - 15:00 Y 17:00 - 23:00 ',
      description: 'Abierto de Martes a Domingo para servirte'
    },
    {
      icon: Mail,
      title: 'Email',
      info: 'cecicruzmiranda@gmail.com',
      description: 'Escríbenos tus consultas'
    }
  ];

  const socialLinks = [
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/elpollojugoso_oficial?igsh=emZ1azFpeHN3cjRk',
      icon: Instagram,
      color: 'bg-pink-600 hover:bg-pink-700',
      description: 'Síguenos para ver nuestras promociones diarias'
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/share/17AXyueuYX/?mibextid=wwXIfr',
      icon: Facebook,
      color: 'bg-blue-600 hover:bg-blue-700',
      description: 'Únete a nuestra comunidad en Facebook'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-500 to-yellow-400 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contáctanos</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Estamos aquí para servirte. No dudes en contactarnos para hacer tu pedido
            o resolver cualquier duda que tengas
          </p>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Información de Contacto
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((item, index) => (
              <div
                key={index}
                className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 text-orange-600 rounded-full mb-4">
                  <item.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-orange-600 font-medium mb-2">{item.info}</p>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Social Media Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Síguenos en Redes Sociales
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {socialLinks.map((social, index) => (
              <div key={index} className="bg-white rounded-lg p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
                <div className={`inline-flex items-center justify-center w-20 h-20 ${social.color} text-white rounded-full mb-6 transition-colors`}>
                  <social.icon className="h-10 w-10" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{social.name}</h3>
                <p className="text-gray-600 mb-6">{social.description}</p>
                <a
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${social.color} text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center`}
                >
                  <social.icon className="h-5 w-5 mr-2" />
                  Seguir en {social.name}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WhatsApp CTA Section */}
      <section className="py-16 bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ¿Listo para hacer tu pedido?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contáctanos directamente por WhatsApp y haz tu pedido de manera rápida y sencilla
          </p>
          <a
            href="https://wa.me/950902706?text=¡Hola! Me gustaría hacer un pedido de pollo asado"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center"
          >
            <Phone className="mr-2 h-6 w-6" />
            Pedir por WhatsApp
          </a>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Encuéntranos
          </h2>
          <div className="bg-gray-200 rounded-lg overflow-hidden h-96">
            <iframe
              title="Ubicación"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6689.452493207358!2d-71.59147976039766!3d-33.03734199076744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9689e0b1ac0376c9%3A0xfdbe278e2c880ab6!2sLos%20Peumos%20402%2C%202391285%20Valpara%C3%ADso!5e0!3m2!1ses!2scl!4v1754763950705!5m2!1ses!2scl"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;