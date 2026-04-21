import { useParams, Link } from 'react-router';
import { ChevronRight, MapPin, Clock, DollarSign, Users, Share2 } from 'lucide-react';

export function LugarDetalle() {
  const { id } = useParams();

  const lugares: Record<string, any> = {
    '1': { nombre: 'Cristo Rey', barrio: 'Los Cristales' },
    '2': { nombre: 'Loma de San Antonio', barrio: 'San Antonio' },
    '3': { nombre: 'La Ermita', barrio: 'Centro' }
  };

  const lugar = lugares[id || '1'] || lugares['1'];

  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-6">
        <div className="flex items-center gap-2 text-sm text-neutral-500 flex-wrap">
          <Link to="/" className="hover:text-neutral-900">Inicio</Link>
          <ChevronRight size={16} />
          <Link to="/lugares" className="hover:text-neutral-900">Lugares</Link>
          <ChevronRight size={16} />
          <span className="text-neutral-900">{lugar.nombre}</span>
        </div>
      </div>

      {/* Video principal */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 pb-4 md:pb-4">
        <div className="w-full h-[400px] md:h-[600px] bg-neutral-100 rounded-3xl flex items-center justify-center">
          <span className="text-neutral-500 font-medium text-lg">Video Principal</span>
        </div>
      </section>

      {/* Gallery */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 pb-8 md:pb-12">
        <div className="grid grid-cols-3 gap-4 h-[300px] md:h-[400px]">
          
          <div className="bg-neutral-100 rounded-3xl flex items-center justify-center">
            <span className="text-neutral-500 font-medium">Foto</span>
          </div>

          <div className="bg-neutral-100 rounded-3xl flex items-center justify-center">
            <span className="text-neutral-500 font-medium">Foto</span>
          </div>

          <div className="bg-neutral-100 rounded-3xl flex items-center justify-center">
            <span className="text-neutral-500 font-medium">Foto</span>
          </div>

        </div>
      </section>

      {/* Content */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 pb-0 md:pb-0">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
          {/* Main info */}
          <div className="lg:col-span-2 space-y-8">
            {/* Header */}
            <div>
              <div className="flex flex-wrap gap-3 mb-4">
                <span className="px-3 py-1 bg-neutral-100 rounded-full text-sm">Cultura</span>
                <span className="px-3 py-1 bg-neutral-100 rounded-full text-sm">Historia</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-medium mb-4">{lugar.nombre}</h1>
              <p className="text-lg text-neutral-600 flex items-center gap-2">
                <MapPin size={20} />
                {lugar.barrio}, Cali
              </p>
            </div>

            {/* Description */}
            <div>
              <h2 className="text-xl md:text-2xl font-medium mb-4">Descripción</h2>
              <p className="text-base text-neutral-600 leading-relaxed mb-4">
                Este emblemático sitio es uno de los lugares más representativos de Cali, destacándose por su valor cultural, histórico y arquitectónico. Es un punto de encuentro para caleños y turistas que buscan conectarse con la esencia de la ciudad.
              </p>
              <p className="text-base text-neutral-600 leading-relaxed">
                Su ubicación estratégica permite tener vistas panorámicas de la ciudad y es un espacio ideal para conocer más sobre la historia y tradiciones de Cali. El sitio cuenta con accesibilidad para todo público y es considerado patrimonio cultural de la región.
              </p>
            </div>

            {/* Historia */}
            <div>
              <h2 className="text-xl md:text-2xl font-medium mb-4">Historia del lugar</h2>
              <p className="text-base text-neutral-600 leading-relaxed mb-4">
                Construido a mediados del siglo XX, este lugar ha sido testigo de importantes momentos de la historia de Cali. Su construcción representó un hito arquitectónico y cultural para la ciudad.
              </p>
              <p className="text-base text-neutral-600 leading-relaxed">
                A lo largo de los años, se ha convertido en un símbolo de identidad caleña y un punto de referencia obligado para quienes visitan la ciudad. Ha sido restaurado y preservado para mantener su valor histórico intacto.
              </p>
            </div>

            {/* Contexto cultural */}
            <div>
              <h2 className="text-xl md:text-2xl font-medium mb-4">Contexto cultural</h2>
              <p className="text-base text-neutral-600 leading-relaxed">
                Este sitio forma parte fundamental de la identidad cultural de Cali. Es un espacio donde convergen tradiciones, historia y vida contemporánea. Los caleños lo consideran un lugar de orgullo local y lo frecuentan tanto para actividades recreativas como culturales.
              </p>
            </div>

            {/* Recomendaciones */}
            <div>
              <h2 className="text-xl md:text-2xl font-medium mb-6">Recomendaciones de visita</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-neutral-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock size={20} className="text-neutral-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-base mb-1">Mejor horario</h3>
                    <p className="text-sm text-neutral-600">Mañanas tempranas o atardeceres</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-neutral-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Users size={20} className="text-neutral-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-base mb-1">Accesibilidad</h3>
                    <p className="text-sm text-neutral-600">Apto para todas las edades</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-neutral-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} className="text-neutral-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-base mb-1">Cómo llegar</h3>
                    <p className="text-sm text-neutral-600">Transporte público disponible</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-neutral-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <DollarSign size={20} className="text-neutral-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-base mb-1">Qué llevar</h3>
                    <p className="text-sm text-neutral-600">Agua, protector solar y cámara</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Info card */}
            <div className="bg-neutral-50 rounded-3xl p-6">
              <h3 className="text-lg font-medium mb-6">Información práctica</h3>

              <div className="space-y-4">
                <div>
                  <p className="text-sm font-medium text-neutral-500 mb-1">Horario</p>
                  <p className="text-base text-neutral-900">Lunes a Domingo, 6am - 6pm</p>
                </div>

                <div>
                  <p className="text-sm font-medium text-neutral-500 mb-1">Entrada</p>
                  <p className="text-base text-neutral-900">Gratuita</p>
                </div>

                <div>
                  <p className="text-sm font-medium text-neutral-500 mb-1">Ubicación</p>
                  <p className="text-base text-neutral-900">{lugar.barrio}, Cali</p>
                </div>

                <div>
                  <p className="text-sm font-medium text-neutral-500 mb-1">Barrio</p>
                  <p className="text-base text-neutral-900">{lugar.barrio}</p>
                </div>

                <div>
                  <p className="text-sm font-medium text-neutral-500 mb-1">Accesibilidad</p>
                  <p className="text-base text-neutral-900">Apto para todos</p>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-neutral-200 space-y-3">
                <button className="w-full px-6 py-3 bg-neutral-900 text-white rounded-full hover:bg-neutral-800 transition-colors">
                  Ver en Google Maps
                </button>
                
              </div>
            </div>


            {/* Map */}
            <div className="bg-neutral-100 rounded-3xl aspect-square relative overflow-hidden hidden lg:block">
              <div className="absolute inset-0 flex items-center justify-center">
                <MapPin size={32} className="text-neutral-400" />
              </div>

              {/* Punto negro */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-neutral-900 rounded-full"></div>

              {/* Texto debajo del punto */}
              <p className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[30px] text-sm text-neutral-600">
                Mapa
              </p>
            </div>

            {/* Share */}
            <div className="bg-neutral-50 rounded-3xl p-6 hidden lg:block">
              <h3 className="text-base font-medium mb-4 flex items-center gap-2">
                <Share2 size={18} />
                Compartir lugar
              </h3>
              <div className="flex gap-3">
                {['FB', 'TW', 'IG', 'WA'].map((social) => (
                  <div key={social} className="w-12 h-12 bg-neutral-200 rounded-full hover:bg-neutral-300 transition-colors cursor-pointer flex items-center justify-center text-xs font-medium">
                    {social}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video 360 */}
<section className="max-w-7xl mx-auto px-4 md:px-6 mt-8 mb-12">
  <div className="w-full h-[400px] bg-neutral-100 rounded-3xl flex items-center justify-center">
    <span className="text-neutral-500 font-medium text-lg">Video 360</span>
  </div>
</section>

      {/* Related places */}
      <section className="bg-neutral-50 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-medium mb-8">Lugares cercanos</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {['Teatro Municipal', 'Plaza de Cayzedo', 'Iglesia San Francisco', 'Museo del Oro'].map((lugar) => (
              <div key={lugar} className="group cursor-pointer">
                <div className="aspect-[3/4] bg-neutral-200 rounded-2xl mb-4 group-hover:bg-neutral-300 transition-colors"></div>
                <h3 className="font-medium text-sm md:text-base mb-1">{lugar}</h3>
                <p className="text-xs md:text-sm text-neutral-500">A 5 min caminando</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
