import { Link } from 'react-router';
import { MapPin, Clock, Users } from 'lucide-react';

export function Rutas() {
  const rutas = [
    {
      id: 1,
      nombre: 'Ciudad entre ríos, montaña y biodiversidad',
      descripcion: 'Descubre la riqueza natural de Cali: desde el Cristo Rey hasta el Río Pance, pasando por parques y zoológico.',
      lugares: 5,
      duracion: '4-6 horas',
      dificultad: 'Media'
    },
    {
      id: 2,
      nombre: 'Turismo cultural: barrios, museos y vida urbana',
      descripcion: 'Explora los barrios tradicionales, museos y espacios culturales que definen la vida urbana de Cali.',
      lugares: 5,
      duracion: '3-5 horas',
      dificultad: 'Baja'
    },
    {
      id: 3,
      nombre: 'La salsa en Cali se baila, se escucha, se aprende y se vive',
      descripcion: 'Recorre los sitios emblemáticos de la salsa en Cali, desde la Plazoleta Jairo Varela hasta los murales del Barrio Obrero.',
      lugares: 4,
      duracion: '2-4 horas',
      dificultad: 'Baja'
    },
    {
      id: 4,
      nombre: 'Turismo histórico: fundación, arquitectura y memoria urbana',
      descripcion: 'Conoce la historia de Cali a través de sus edificios coloniales, plazas y monumentos históricos.',
      lugares: 5,
      duracion: '3-4 horas',
      dificultad: 'Baja'
    },
    {
      id: 5,
      nombre: 'Muralismo y arte urbano: la ciudad narrada en muros',
      descripcion: 'Descubre cómo el arte urbano cuenta la historia y la identidad de Cali en sus paredes.',
      lugares: 3,
      duracion: '2-3 horas',
      dificultad: 'Baja'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="max-w-5xl mx-auto px-4 md:px-6 py-12 md:py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-medium mb-6">Rutas temáticas</h1>
        <p className="text-lg md:text-xl text-neutral-600 mb-3">Cinco formas diferentes de descubrir Cali</p>
        <p className="text-base md:text-lg text-neutral-500">Cada ruta te lleva por una experiencia única de la ciudad</p>
      </section>

      {/* Routes Grid */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 pb-16 md:pb-24">
        <div className="space-y-8 md:space-y-12">
          {rutas.map((ruta) => (
            <Link key={ruta.id} to={`/rutas/${ruta.id}`}>
              <div className="bg-neutral-50 rounded-3xl p-6 md:p-8 hover:bg-neutral-100 transition-colors cursor-pointer">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                  {/* Image */}
                  <div className="aspect-[4/3] bg-neutral-200 rounded-2xl"></div>

                  {/* Info */}
                  <div className="md:col-span-2 flex flex-col justify-between">
                    <div>
                      <span className="inline-block px-4 py-1 bg-neutral-200 rounded-full text-sm mb-4">Ruta {ruta.id}</span>
                      <h2 className="text-xl md:text-2xl font-medium mb-4">{ruta.nombre}</h2>
                      <p className="text-base text-neutral-600 mb-6 leading-relaxed">{ruta.descripcion}</p>

                      {/* Stats */}
                      <div className="flex flex-wrap gap-6">
                        <div className="flex items-center gap-2">
                          <MapPin size={20} className="text-neutral-400" />
                          <span className="text-sm text-neutral-600">{ruta.lugares} lugares</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock size={20} className="text-neutral-400" />
                          <span className="text-sm text-neutral-600">{ruta.duracion}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users size={20} className="text-neutral-400" />
                          <span className="text-sm text-neutral-600">Dificultad {ruta.dificultad}</span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6">
                      <div className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-900 text-white rounded-full hover:bg-neutral-800 transition-colors">
                        Ver ruta completa →
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Guías turísticos */}
      <section className="bg-neutral-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-medium mb-4">Directorio de guías turísticos</h2>
            <p className="text-lg text-neutral-300">Conecta con expertos locales para tus recorridos</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {['María López', 'Carlos Ramírez', 'Ana Rodríguez', 'Diego Martínez'].map((guia, idx) => (
              <div key={guia} className="bg-neutral-800 rounded-2xl p-6 text-center hover:bg-neutral-700 transition-colors">
                <div className="w-24 h-24 bg-neutral-700 rounded-full mx-auto mb-4"></div>
                <h3 className="text-lg font-medium mb-1">{guia}</h3>
                <p className="text-sm text-neutral-400 mb-4">Guía certificado</p>
                <p className="text-xs text-neutral-400 mb-6 leading-relaxed">
                  Especializado en {idx === 0 ? 'naturaleza' : idx === 1 ? 'historia' : idx === 2 ? 'salsa' : 'cultura'} y turismo local
                </p>
                <button className="w-full px-4 py-2 bg-neutral-600 hover:bg-neutral-500 rounded-full text-sm transition-colors">
                  Ver perfil
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
