import { useParams, Link } from 'react-router';
import { MapPin, Clock, TrendingUp, Info, ChevronRight } from 'lucide-react';

export function RutaDetalle() {
  const { id } = useParams();

  const rutasInfo: Record<string, any> = {
    '1': {
      nombre: 'Ciudad entre ríos, montaña y biodiversidad',
      descripcion: 'Descubre la riqueza natural de Cali',
      lugares: ['Cristo Rey', 'Parque de las Garzas', 'Ecoparque Río Pance', 'Zoológico de Cali', 'Jardín Botánico']
    },
    '2': {
      nombre: 'Turismo cultural: barrios, museos y vida urbana',
      descripcion: 'Explora la cultura y vida urbana de Cali',
      lugares: ['Loma de San Antonio', 'El Gato de Tejada', 'Parque de las Gatas', 'Museo La Tertulia', 'YAWA']
    },
    '3': {
      nombre: 'La salsa en Cali',
      descripcion: 'Se baila, se escucha, se aprende y se vive',
      lugares: ['Plazoleta Jairo Varela', 'Barrio Obrero', 'Museo de la Salsa', 'Murales del Barrio Obrero']
    }
  };

  const ruta = rutasInfo[id || '1'] || rutasInfo['1'];

  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-6">
        <div className="flex items-center gap-2 text-sm text-neutral-500">
          <Link to="/" className="hover:text-neutral-900">Inicio</Link>
          <ChevronRight size={16} />
          <Link to="/rutas" className="hover:text-neutral-900">Rutas</Link>
          <ChevronRight size={16} />
          <span className="text-neutral-900">Ruta {id}</span>
        </div>
      </div>

      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 pb-8 md:pb-12">
        <span className="inline-block px-4 py-1 bg-neutral-200 rounded-full text-sm mb-4">Ruta {id}</span>
        <h1 className="text-3xl md:text-5xl font-medium mb-6 max-w-4xl">{ruta.nombre}</h1>
        <p className="text-lg md:text-xl text-neutral-600 max-w-3xl">{ruta.descripcion}</p>
      </section>

      {/* Map Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 pb-8 md:pb-12">
        <div className="bg-neutral-100 rounded-3xl overflow-hidden">
          <div className="aspect-[21/9] relative">
            {/* Map placeholder */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <MapPin size={48} className="text-neutral-400 mx-auto mb-3" />
                <p className="text-neutral-600 font-medium">Mapa interactivo de la ruta</p>
              </div>
            </div>

            {/* Map pins */}
            {ruta.lugares.map((lugar: string, idx: number) => (
              <div
                key={idx}
                className="absolute w-10 h-10 bg-neutral-900 text-white rounded-full flex items-center justify-center font-medium shadow-lg"
                style={{
                  left: `${20 + idx * 15}%`,
                  top: `${30 + (idx % 2) * 25}%`
                }}
              >
                {idx + 1}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recomendaciones */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 pb-8 md:pb-12">
        <div className="bg-neutral-50 rounded-3xl p-6 md:p-8">
          <h2 className="text-xl md:text-2xl font-medium mb-6">Recomendaciones para la visita</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center flex-shrink-0">
                <Clock size={24} className="text-neutral-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-base mb-1">Mejor momento</h3>
                <p className="text-sm text-neutral-600">Mañanas entre 8-11am o tardes 4-6pm para evitar el calor</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center flex-shrink-0">
                <MapPin size={24} className="text-neutral-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-base mb-1">Duración estimada</h3>
                <p className="text-sm text-neutral-600">Entre 3 a 5 horas dependiendo del ritmo del recorrido</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center flex-shrink-0">
                <TrendingUp size={24} className="text-neutral-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-base mb-1">Nivel de dificultad</h3>
                <p className="text-sm text-neutral-600">Media - requiere caminar moderadamente</p>
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-blue-50 border-l-4 border-blue-500 rounded-lg">
            <div className="flex gap-3">
              <Info size={20} className="text-blue-600 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-blue-900">Lleva agua, protector solar y calzado cómodo. Verifica los horarios de cada lugar antes de tu visita.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Lugares de la ruta */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 pb-12 md:pb-16">
        <h2 className="text-2xl md:text-3xl font-medium mb-8">Lugares en esta ruta</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {ruta.lugares.map((lugar: string, idx: number) => (
            <Link key={idx} to={`/lugares/${idx + 1}`}>
              <div className="group cursor-pointer">
                <div className="relative">
                  <div className="aspect-[3/4] bg-neutral-100 rounded-2xl mb-4 group-hover:bg-neutral-200 transition-colors"></div>
                  <div className="absolute top-3 left-3 w-8 h-8 bg-neutral-900 text-white rounded-full flex items-center justify-center text-sm font-medium">
                    {idx + 1}
                  </div>
                </div>
                <h3 className="font-medium text-sm md:text-base mb-2">{lugar}</h3>
                <p className="text-xs md:text-sm text-neutral-500 mb-3">Lugar emblemático</p>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-neutral-100 rounded-full text-xs">Cultura</span>
                  <span className="px-3 py-1 bg-neutral-100 rounded-full text-xs">Centro</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA Guías */}
      <section className="max-w-5xl mx-auto px-4 md:px-6 pb-16 md:pb-24">
        <div className="bg-neutral-900 text-white rounded-3xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-4xl font-medium mb-6">¿Prefieres un guía experto?</h2>
          <p className="text-base md:text-lg text-neutral-300 mb-8">Conecta con guías locales que conocen todos los secretos de esta ruta</p>
          <button className="inline-flex items-center gap-2 px-8 py-4 bg-white text-neutral-900 rounded-full hover:bg-neutral-100 transition-colors">
            Ver guías disponibles →
          </button>
        </div>
      </section>
    </div>
  );
}
