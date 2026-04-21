import { Mail, Phone, MapPin, Instagram, Facebook, Twitter, Youtube, ChevronDown } from 'lucide-react';
import { useState } from 'react';

export function Contacto() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      pregunta: '¿Las rutas son gratuitas?',
      respuesta: 'Sí, todas las rutas publicadas en el sitio son completamente gratuitas. Puedes acceder a mapas, fichas de lugares y recomendaciones sin costo. Solo algunos sitios específicos pueden tener tarifas de entrada.'
    },
    {
      pregunta: '¿Necesito un guía turístico?',
      respuesta: 'No es obligatorio. Las rutas están diseñadas para autorecorridos con mapas claros y toda la información necesaria. Sin embargo, ofrecemos un directorio de guías certificados si prefieres una experiencia guiada.'
    },
    {
      pregunta: '¿Las rutas son seguras?',
      respuesta: 'Todas las rutas incluyen recomendaciones de seguridad, mejores horarios de visita y alertas sobre zonas específicas. Te sugerimos seguir las indicaciones y visitar en horarios diurnos.'
    },
    {
      pregunta: '¿Puedo hacer las rutas en bicicleta o en carro?',
      respuesta: 'Algunas rutas son aptas para bicicleta y otras para auto. Cada ruta especifica los medios de transporte recomendados y las distancias entre cada punto.'
    },
    {
      pregunta: '¿Cómo actualizo información de un lugar?',
      respuesta: 'Si encuentras información desactualizada, puedes contactarnos a través del formulario de esta página indicando el lugar específico y la corrección necesaria.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="max-w-4xl mx-auto px-4 md:px-6 py-12 md:py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-medium mb-6">Contacto</h1>
        <p className="text-lg md:text-xl text-neutral-600 mb-3">¿Tienes preguntas o sugerencias?</p>
        <p className="text-base md:text-lg text-neutral-500">Estamos aquí para ayudarte a descubrir Cali</p>
      </section>

      {/* Contact Content */}
      <section className="max-w-6xl mx-auto px-4 md:px-6 pb-16 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16">
          {/* Form */}
          <div className="bg-neutral-50 rounded-3xl p-6 md:p-10">
            <h2 className="text-2xl md:text-3xl font-medium mb-8">Envíanos un mensaje</h2>

            <form className="space-y-6">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-3">
                  Nombre completo
                </label>
                <input
                  type="text"
                  placeholder="Tu nombre"
                  className="w-full px-5 py-4 bg-white border-2 border-neutral-200 rounded-2xl focus:border-neutral-900 focus:outline-none transition-colors"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-3">
                  Correo electrónico
                </label>
                <input
                  type="email"
                  placeholder="tu@email.com"
                  className="w-full px-5 py-4 bg-white border-2 border-neutral-200 rounded-2xl focus:border-neutral-900 focus:outline-none transition-colors"
                />
              </div>

              {/* Subject */}
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-3">
                  Asunto
                </label>
                <input
                  type="text"
                  placeholder="¿Sobre qué quieres escribir?"
                  className="w-full px-5 py-4 bg-white border-2 border-neutral-200 rounded-2xl focus:border-neutral-900 focus:outline-none transition-colors"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-3">
                  Mensaje
                </label>
                <textarea
                  rows={5}
                  placeholder="Escribe tu mensaje aquí..."
                  className="w-full px-5 py-4 bg-white border-2 border-neutral-200 rounded-2xl focus:border-neutral-900 focus:outline-none transition-colors resize-none"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full px-8 py-4 bg-neutral-900 text-white rounded-full hover:bg-neutral-800 transition-colors font-medium"
              >
                Enviar mensaje
              </button>
            </form>
          </div>

          {/* Info */}
          <div className="space-y-8 md:space-y-12">
            {/* Contact info */}
            <div>
              <h2 className="text-xl md:text-2xl font-medium mb-6">Información de contacto</h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-neutral-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Mail size={20} className="text-neutral-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-base mb-1">Correo electrónico</h3>
                    <a href="mailto:info@caliciuddiversa.co" className="text-base text-neutral-600 hover:text-neutral-900">
                      info@caliciuddiversa.co
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-neutral-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Phone size={20} className="text-neutral-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-base mb-1">Teléfono</h3>
                    <a href="tel:+573001234567" className="text-base text-neutral-600 hover:text-neutral-900">
                      +57 300 123 4567
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-neutral-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} className="text-neutral-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-base mb-1">Ubicación</h3>
                    <p className="text-base text-neutral-600">
                      Cali, Valle del Cauca<br />Colombia
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social media */}
            <div>
              <h2 className="text-xl md:text-2xl font-medium mb-6">Síguenos en redes sociales</h2>

              <div className="grid grid-cols-2 gap-4">
                <a href="#" className="bg-neutral-50 rounded-2xl p-6 flex items-center gap-4 hover:bg-neutral-100 transition-colors group">
                  <div className="w-12 h-12 bg-neutral-200 group-hover:bg-neutral-300 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors">
                    <Instagram size={20} className="text-neutral-700" />
                  </div>
                  <span className="font-medium text-sm">Instagram</span>
                </a>

                <a href="#" className="bg-neutral-50 rounded-2xl p-6 flex items-center gap-4 hover:bg-neutral-100 transition-colors group">
                  <div className="w-12 h-12 bg-neutral-200 group-hover:bg-neutral-300 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors">
                    <Facebook size={20} className="text-neutral-700" />
                  </div>
                  <span className="font-medium text-sm">Facebook</span>
                </a>

                <a href="#" className="bg-neutral-50 rounded-2xl p-6 flex items-center gap-4 hover:bg-neutral-100 transition-colors group">
                  <div className="w-12 h-12 bg-neutral-200 group-hover:bg-neutral-300 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors">
                    <Twitter size={20} className="text-neutral-700" />
                  </div>
                  <span className="font-medium text-sm">Twitter</span>
                </a>

                <a href="#" className="bg-neutral-50 rounded-2xl p-6 flex items-center gap-4 hover:bg-neutral-100 transition-colors group">
                  <div className="w-12 h-12 bg-neutral-200 group-hover:bg-neutral-300 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors">
                    <Youtube size={20} className="text-neutral-700" />
                  </div>
                  <span className="font-medium text-sm">YouTube</span>
                </a>
              </div>
            </div>

            {/* Additional info */}
            <div className="bg-neutral-100 rounded-3xl p-6 md:p-8">
              <h3 className="text-lg font-medium mb-4">Horario de atención</h3>
              <p className="text-base text-neutral-600 leading-relaxed mb-2">
                Lunes a Viernes: 9:00 AM - 6:00 PM
              </p>
              <p className="text-base text-neutral-600 leading-relaxed">
                Respondemos en menos de 24 horas
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-neutral-50 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-medium mb-4">Preguntas frecuentes</h2>
            <p className="text-lg text-neutral-600">Resolvemos las dudas más comunes sobre Cali Ciudad Diversa</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white rounded-2xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-6 flex items-center justify-between text-left hover:bg-neutral-50 transition-colors"
                >
                  <span className="font-medium text-base md:text-lg pr-4">{faq.pregunta}</span>
                  <ChevronDown
                    size={20}
                    className={`text-neutral-400 flex-shrink-0 transition-transform ${
                      openFaq === idx ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-6 pt-0">
                    <p className="text-base text-neutral-600 leading-relaxed">
                      {faq.respuesta}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
