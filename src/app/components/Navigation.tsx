import { Link, useLocation } from 'react-router';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Navigation() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const links = [
    { path: '/', label: 'Inicio' },
    { path: '/acerca-de', label: 'Acerca de' },
    { path: '/rutas', label: 'Rutas' },
    { path: '/lugares', label: 'Lugares' },
    { path: '/contacto', label: 'Contacto' }
  ];

  return (
    <nav className="bg-white/80 backdrop-blur-sm sticky top-0 z-50 border-b border-neutral-100">
      <div className="max-w-7xl mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3" onClick={() => setMobileMenuOpen(false)}>
            <div className="w-12 h-12 bg-neutral-200 rounded-full"></div>
            <span className="font-medium text-lg hidden md:block">Cali Ciudad Diversa</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm transition-colors ${
                  location.pathname === link.path
                    ? 'text-neutral-900 font-medium'
                    : 'text-neutral-500 hover:text-neutral-900'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-neutral-600 hover:text-neutral-900"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden pt-4 pb-2">
            <div className="flex flex-col gap-3">
              {links.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-base py-2 transition-colors ${
                    location.pathname === link.path
                      ? 'text-neutral-900 font-medium'
                      : 'text-neutral-500 hover:text-neutral-900'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
