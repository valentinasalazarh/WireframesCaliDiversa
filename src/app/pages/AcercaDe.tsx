export function AcercaDe() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="max-w-4xl mx-auto px-4 md:px-6 py-12 md:py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-medium mb-6">Acerca de Cali Ciudad Diversa</h1>
        <p className="text-lg md:text-xl text-neutral-600 mb-3">Un proyecto para conectar a caleños y turistas con la verdadera identidad de Cali</p>
        <p className="text-base md:text-lg text-neutral-500">5 rutas temáticas · 20 sitios turísticos · Contexto cultural e histórico</p>
      </section>

      {/* ¿Qué es Cali Ciudad Diversa? */}
      <section className="max-w-5xl mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="aspect-[4/3] bg-neutral-100 rounded-3xl order-2 md:order-1"></div>
          <div className="order-1 md:order-2">
            <h2 className="text-2xl md:text-3xl font-medium mb-6">¿Qué es Cali Ciudad Diversa?</h2>
            <p className="text-base md:text-lg text-neutral-600 leading-relaxed mb-4">
              Cali Ciudad Diversa es un espacio digital que articula la riqueza cultural, histórica y natural de Cali a través de cinco rutas temáticas que conectan 20 sitios turísticos emblemáticos de la ciudad.
            </p>
            <p className="text-base md:text-lg text-neutral-600 leading-relaxed">
              Cada sitio cuenta con su propia ficha con descripción, historia, contexto cultural, ubicación y recomendaciones de visita, junto con mapas integrados que facilitan la planificación de recorridos temáticos.
            </p>
          </div>
        </div>
      </section>

      {/* Propósito del proyecto */}
      <section className="bg-neutral-50 py-12 md:py-16">
        <div className="max-w-5xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-medium mb-6">Propósito del proyecto</h2>
              <p className="text-base md:text-lg text-neutral-600 leading-relaxed mb-6">
                Nuestro objetivo es motivar la exploración de Cali, fortalecer el orgullo identitario de los caleños y posicionar a la ciudad como un destino turístico diverso y auténtico.
              </p>

              {/* Key points */}
              <div className="mt-8 space-y-4">
                <div className="flex gap-4">
                  <div className="w-6 h-6 bg-neutral-300 rounded-full flex-shrink-0 mt-1"></div>
                  <div className="flex-1">
                    <p className="text-base text-neutral-700 font-medium mb-1">Centralizar información confiable</p>
                    <p className="text-sm text-neutral-600">20 sitios organizados en 5 rutas temáticas con contexto cultural completo</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-6 h-6 bg-neutral-300 rounded-full flex-shrink-0 mt-1"></div>
                  <div className="flex-1">
                    <p className="text-base text-neutral-700 font-medium mb-1">Facilitar la orientación</p>
                    <p className="text-sm text-neutral-600">Mapas integrados y fichas claras para autorecorridos seguros</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-6 h-6 bg-neutral-300 rounded-full flex-shrink-0 mt-1"></div>
                  <div className="flex-1">
                    <p className="text-base text-neutral-700 font-medium mb-1">Visibilizar la diversidad</p>
                    <p className="text-sm text-neutral-600">Naturaleza, salsa, historia, arte urbano y vida de barrio</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="aspect-[3/4] bg-neutral-100 rounded-3xl order-first md:order-last"></div>
          </div>
        </div>
      </section>

      {/* Cómo usar las rutas */}
      <section className="max-w-5xl mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-medium mb-4">Cómo usar las rutas</h2>
          <p className="text-base md:text-lg text-neutral-600">Guía rápida para explorar Cali</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-20 h-20 bg-neutral-200 rounded-full mx-auto mb-6 flex items-center justify-center text-2xl font-medium">1</div>
            <h3 className="text-lg font-medium mb-3">Elige tu ruta</h3>
            <p className="text-sm text-neutral-600 leading-relaxed">
              Selecciona una de las 5 rutas temáticas según tu interés: naturaleza, cultura, salsa, historia o arte urbano.
            </p>
          </div>
          <div className="text-center">
            <div className="w-20 h-20 bg-neutral-200 rounded-full mx-auto mb-6 flex items-center justify-center text-2xl font-medium">2</div>
            <h3 className="text-lg font-medium mb-3">Explora el mapa</h3>
            <p className="text-sm text-neutral-600 leading-relaxed">
              Revisa el mapa integrado con todos los sitios de la ruta, distancias y recomendaciones de seguridad.
            </p>
          </div>
          <div className="text-center">
            <div className="w-20 h-20 bg-neutral-200 rounded-full mx-auto mb-6 flex items-center justify-center text-2xl font-medium">3</div>
            <h3 className="text-lg font-medium mb-3">Descubre cada lugar</h3>
            <p className="text-sm text-neutral-600 leading-relaxed">
              Lee el contexto cultural, historia y datos prácticos de cada sitio antes de visitarlo.
            </p>
          </div>
        </div>
      </section>

      {/* Manifiesto de marca */}
      <section className="bg-neutral-900 text-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
          <h2 className="text-2xl md:text-4xl font-medium mb-8">Manifiesto de marca</h2>

          <div className="text-base md:text-lg leading-relaxed mb-12 space-y-4">
            <p>
              Cali no se explica, se recorre. En sus barrios vive la historia de una ciudad que creció entre el río y la montaña, que bailó cuando el mundo escuchaba otro ritmo, que pintó sus muros cuando no tenía museos.
            </p>
            <p>
              Defendemos una ciudad que se mira a sí misma con orgullo y que abre sus puertas para todos: el caleño que quiere redescubrir su territorio, el turista que quiere ir más allá de la salsa, y el migrante que desde lejos sigue sintiendo a Cali en el corazón.
            </p>
            <p className="font-medium text-xl">
              Porque nuestra ciudad es un destino diverso que vibra en cada esquina, que guarda memoria en cada muro y que tiene algo nuevo que contar en cada barrio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div>
              <div className="w-16 h-16 bg-neutral-700 rounded-2xl mx-auto mb-4"></div>
              <h3 className="text-lg font-medium mb-2">Autenticidad</h3>
              <p className="text-sm text-neutral-400">Mostramos la verdadera identidad de Cali</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-neutral-700 rounded-2xl mx-auto mb-4"></div>
              <h3 className="text-lg font-medium mb-2">Diversidad</h3>
              <p className="text-sm text-neutral-400">Celebramos todas las facetas de la ciudad</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-neutral-700 rounded-2xl mx-auto mb-4"></div>
              <h3 className="text-lg font-medium mb-2">Orgullo local</h3>
              <p className="text-sm text-neutral-400">Fortalecemos la identidad caleña</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
