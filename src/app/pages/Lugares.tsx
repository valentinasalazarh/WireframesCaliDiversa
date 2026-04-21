import { Link } from 'react-router';
import { useState } from 'react';
import { Map, SlidersHorizontal } from 'lucide-react';

export function Lugares() {
  const [filtroActivo, setFiltroActivo] = useState('Todos');

  const filtrosCategoria = ['Todos', 'Naturaleza', 'Cultura', 'Salsa', 'Historia', 'Arte urbano'];
  const filtrosBarrio = ['Todos los barrios', 'Centro', 'San Antonio', 'Granada', 'Obrero', 'Oeste'];

  const lugares = [
    'Cristo Rey', 'Parque de las Garzas', 'Río Pance', 'Zoológico de Cali',
    'Jardín Botánico', 'Loma de San Antonio', 'Gato de Tejada', 'Parque de las Gatas',
    'Museo La Tertulia', 'YAWA', 'Plazoleta Jairo Varela', 'Barrio Obrero',
    'Museo de la Salsa', 'La Merced', 'Teatro Municipal', 'Iglesia San Francisco',
    'Plaza de Cayzedo', 'La Ermita', 'Bulevar del Río', 'Estación del Ferrocarril'
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-4xl md:text-5xl font-medium mb-6">Todos los lugares</h1>
          <p className="text-lg md:text-xl text-neutral-600 mb-3">20 sitios turísticos emblemáticos de Cali</p>
          <p className="text-base md:text-lg text-neutral-500">Explora por temática, barrio o interés</p>
        </div>

        {/* Filters - Category */}
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-4">
            <SlidersHorizontal size={20} className="text-neutral-600" />
            <span className="text-sm font-medium">Filtrar por temática:</span>
          </div>
          <div className="flex flex-wrap gap-3">
            {filtrosCategoria.map((filtro) => (
              <button
                key={filtro}
                onClick={() => setFiltroActivo(filtro)}
                className={`px-5 py-2.5 rounded-full text-sm transition-colors ${
                  filtroActivo === filtro
                    ? 'bg-neutral-900 text-white'
                    : 'bg-neutral-100 hover:bg-neutral-200 text-neutral-700'
                }`}
              >
                {filtro}
              </button>
            ))}
          </div>
        </div>

        {/* Secondary filters */}
        <div className="flex flex-wrap gap-4 items-center">
          <select className="px-4 py-2.5 bg-neutral-100 rounded-full text-sm border-0 focus:ring-2 focus:ring-neutral-900">
            {filtrosBarrio.map((barrio) => (
              <option key={barrio}>{barrio}</option>
            ))}
          </select>
          <div className="w-px h-6 bg-neutral-200 hidden md:block"></div>
          <select className="px-4 py-2.5 bg-neutral-100 rounded-full text-sm border-0">
            <option>Ordenar por: Destacados</option>
            <option>A-Z</option>
            <option>Más visitados</option>
          </select>
        </div>
      </section>

      {/* Results count */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 pb-6">
        <p className="text-sm text-neutral-600">
          Mostrando <span className="font-medium">{lugares.length}</span> lugares
        </p>
      </section>

      {/* Places Grid */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 pb-16 md:pb-24">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {lugares.map((lugar, idx) => (
            <Link key={idx} to={`/lugares/${idx + 1}`}>
              <div className="group cursor-pointer">
                <div className="aspect-[3/4] bg-neutral-100 rounded-2xl mb-4 group-hover:bg-neutral-200 transition-colors relative overflow-hidden">
                  {/* Category badge */}
                  <div className="absolute top-3 right-3 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium">
                    Cultura
                  </div>
                </div>

                <h3 className="font-medium text-sm md:text-base mb-1">{lugar}</h3>
                <p className="text-xs md:text-sm text-neutral-500 mb-3">Sitio emblemático · Centro</p>

                {/* Tags */}
                <div className="flex gap-2 flex-wrap">
                  <span className="px-2.5 py-1 bg-neutral-100 rounded-full text-xs">Historia</span>
                  <span className="px-2.5 py-1 bg-neutral-100 rounded-full text-xs">Gratuito</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Load more */}
        <div className="text-center mt-12">
          <button className="px-8 py-4 bg-neutral-100 hover:bg-neutral-200 rounded-full transition-colors font-medium">
            Cargar más lugares
          </button>
        </div>
      </section>

      {/* Map view toggle */}
      <button className="fixed bottom-6 right-6 md:bottom-8 md:right-8 flex items-center gap-2 px-6 py-4 bg-neutral-900 text-white rounded-full shadow-xl hover:bg-neutral-800 transition-colors">
        <Map size={20} />
        <span className="hidden md:inline">Ver en mapa</span>
      </button>
    </div>
  );
}
