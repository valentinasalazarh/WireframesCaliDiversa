import { Link } from 'react-router';

export function Footer() {
  return (
    <footer className="bg-neutral-50 mt-32">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo column */}
          <div>
            <div className="w-12 h-12 bg-neutral-200 rounded-full mb-4"></div>
            <p className="text-sm text-neutral-600 mb-2">Cali Ciudad Diversa</p>
            <p className="text-xs text-neutral-500">Descubre la ciudad en 5 rutas temáticas</p>
          </div>

          {/* Navegación */}
          <div>
            <h3 className="font-medium text-sm mb-6">Navegación</h3>
            <div className="space-y-3">
              <Link to="/" className="block text-sm text-neutral-600 hover:text-neutral-900">Inicio</Link>
              <Link to="/acerca-de" className="block text-sm text-neutral-600 hover:text-neutral-900">Acerca de</Link>
              <Link to="/rutas" className="block text-sm text-neutral-600 hover:text-neutral-900">Rutas</Link>
              <Link to="/lugares" className="block text-sm text-neutral-600 hover:text-neutral-900">Lugares</Link>
            </div>
          </div>

          {/* Rutas */}
          <div>
            <h3 className="font-medium text-sm mb-6">Rutas temáticas</h3>
            <div className="space-y-3">
              <Link to="/rutas/1" className="block text-sm text-neutral-600 hover:text-neutral-900">Naturaleza</Link>
              <Link to="/rutas/2" className="block text-sm text-neutral-600 hover:text-neutral-900">Cultura</Link>
              <Link to="/rutas/3" className="block text-sm text-neutral-600 hover:text-neutral-900">Salsa</Link>
              <Link to="/rutas/4" className="block text-sm text-neutral-600 hover:text-neutral-900">Historia</Link>
            </div>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="font-medium text-sm mb-6">Contacto</h3>
            <div className="space-y-3">
              <p className="text-sm text-neutral-600">info@caliciuddiversa.co</p>
              <p className="text-sm text-neutral-600">Cali, Colombia</p>
              <Link to="/contacto" className="block text-sm text-neutral-600 hover:text-neutral-900">Formulario de contacto</Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-neutral-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-neutral-500">© 2026 Cali Ciudad Diversa. Todos los derechos reservados.</p>
          <div className="flex gap-4">
            {['Instagram', 'Facebook', 'Twitter', 'YouTube'].map((social) => (
              <div key={social} className="w-10 h-10 bg-neutral-200 rounded-full"></div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
