import { Link } from 'react-router';
import { ArrowRight, Map } from 'lucide-react';

export function Inicio() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[500px] md:h-[600px] bg-neutral-100 overflow-hidden rounded-3xl mx-4 md:mx-6 mt-4 md:mt-6">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center max-w-3xl px-6">
            <h1 className="text-4xl md:text-6xl font-medium mb-6">Descubre Cali en 5 rutas temáticas</h1>
            <p className="text-lg md:text-xl text-neutral-600 mb-3">Explora la riqueza cultural, histórica y natural de Cali</p>
            <p className="text-base md:text-lg text-neutral-500 mb-12">20 sitios turísticos con contexto, mapas y recomendaciones para cada ruta</p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/rutas" className="px-8 py-4 bg-neutral-900 text-white rounded-full hover:bg-neutral-800 transition-colors flex items-center justify-center gap-2">
                Explorar rutas <ArrowRight size={20} />
              </Link>
              <Link to="/lugares" className="px-8 py-4 bg-white border-2 border-neutral-200 rounded-full hover:border-neutral-300 transition-colors flex items-center justify-center gap-2">
                Ver todos los lugares <Map size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5 Rutas Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-24">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-medium mb-4">Cinco rutas para explorar Cali</h2>
          <p className="text-lg text-neutral-600">Cada ruta cuenta una historia diferente de la ciudad</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {[
            { nombre: 'Ciudad entre ríos', subtitulo: 'Naturaleza y biodiversidad' },
            { nombre: 'Turismo cultural', subtitulo: 'Barrios, museos y vida urbana' },
            { nombre: 'La salsa en Cali', subtitulo: 'Música y tradición' },
            { nombre: 'Turismo histórico', subtitulo: 'Fundación y arquitectura' },
            { nombre: 'Arte urbano', subtitulo: 'Muralismo y expresión' }
          ].map((ruta, idx) => (
            <Link key={idx} to={`/rutas/${idx + 1}`}>
              <div className="group cursor-pointer">
                <div className="aspect-[3/4] bg-neutral-100 rounded-3xl mb-4 group-hover:bg-neutral-200 transition-colors"></div>
                <h3 className="font-medium text-sm md:text-base mb-1">{ruta.nombre}</h3>
                <p className="text-xs md:text-sm text-neutral-500">{ruta.subtitulo}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Places */}
      <section className="bg-neutral-50 rounded-3xl mx-4 md:mx-6 px-4 md:px-6 py-16 md:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-medium mb-4">Lugares destacados de Cali</h2>
            <p className="text-lg text-neutral-600">Los sitios más emblemáticos de la ciudad</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              'Cristo Rey',
              'Loma de San Antonio',
              'La Ermita',
              'Plazoleta Jairo Varela',
              'Río Pance',
              'Gato de Tejada',
              'Teatro Municipal',
              'Museo La Tertulia'
            ].map((place) => (
              <div key={place} className="group cursor-pointer">
                <div className="aspect-square bg-neutral-200 rounded-2xl mb-4 group-hover:bg-neutral-300 transition-colors"></div>
                <h3 className="font-medium text-sm md:text-base mb-1">{place}</h3>
                <p className="text-xs md:text-sm text-neutral-500">Lugar emblemático</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/lugares" className="inline-flex items-center gap-2 px-8 py-4 bg-neutral-900 text-white rounded-full hover:bg-neutral-800 transition-colors">
              Ver todos los lugares <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-5xl mx-auto px-4 md:px-6 py-16 md:py-24">
        <div className="bg-neutral-100 rounded-3xl p-8 md:p-16 text-center">
          <h2 className="text-2xl md:text-4xl font-medium mb-6">¿Necesitas un guía turístico?</h2>
          <p className="text-base md:text-lg text-neutral-600 mb-3">Conecta con guías locales expertos</p>
          <p className="text-sm md:text-base text-neutral-500 mb-8 md:mb-12">Descubre Cali de la mano de quienes mejor conocen la ciudad</p>
          <Link to="/rutas" className="inline-flex items-center gap-2 px-8 py-4 bg-neutral-900 text-white rounded-full hover:bg-neutral-800 transition-colors">
            Ver directorio de guías <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
