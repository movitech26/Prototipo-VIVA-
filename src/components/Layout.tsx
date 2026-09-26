import { NavLink, Outlet, useLocation, useNavigate } from 'react-router';

const navLinks = [
  { to: '/', label: 'Início', end: true },
  { to: '/mapa', label: 'Mapa' },
  { to: '/alimentacao', label: 'Alimentação' },
  { to: '#sobre', label: 'Sobre' },
];

export default function Layout() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col" style={{ background: '#0f1117', color: '#f0f2f5', fontFamily: "'Montserrat', sans-serif" }}>
      <header style={{ borderBottom: '1px solid #2a2f45', background: 'rgba(15,17,23,0.95)', backdropFilter: 'blur(12px)' }} className="sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <NavLink to="/" className="flex items-center gap-2 group">
            <div style={{ background: '#5bde8a', borderRadius: '8px', width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ color: '#0a1a10', fontWeight: 900, fontSize: '18px', letterSpacing: '-1px' }}>V+</span>
            </div>
            <span style={{ fontWeight: 800, fontSize: '20px', letterSpacing: '-0.5px', color: '#f0f2f5' }}>Viva+</span>
          </NavLink>

          <nav className="flex items-center gap-1">
            {navLinks.map(({ to, label, end }) => (
              <NavLink
                key={to}
                to={to}
                end={end}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-lg text-sm font-600 transition-all duration-200 ${
                    isActive && to !== '#sobre'
                      ? 'bg-[#1e2235] text-[#5bde8a]'
                      : 'text-[#8891a8] hover:text-[#f0f2f5] hover:bg-[#1a1d27]'
                  }`
                }
                style={{ fontWeight: 600 }}
              >
                {label}
              </NavLink>
            ))}
            <div style={{ width: '1px', height: '20px', background: '#2a2f45', margin: '0 8px' }} />
            <button
              onClick={() => navigate('/login')}
              style={{
                padding: '8px 16px', borderRadius: '8px', fontSize: '14px', fontWeight: 600,
                background: 'transparent', border: '1px solid #2a2f45', color: '#c8ccd8',
                cursor: 'pointer', fontFamily: "'Montserrat', sans-serif", transition: 'all 0.15s',
              }}
              onMouseEnter={e => { (e.target as HTMLElement).style.borderColor = '#5bde8a55'; (e.target as HTMLElement).style.color = '#f0f2f5'; }}
              onMouseLeave={e => { (e.target as HTMLElement).style.borderColor = '#2a2f45'; (e.target as HTMLElement).style.color = '#c8ccd8'; }}
            >
              Entrar
            </button>
            <button
              onClick={() => navigate('/cadastro')}
              style={{
                padding: '8px 16px', borderRadius: '8px', fontSize: '14px', fontWeight: 700,
                background: '#5bde8a', border: 'none', color: '#0a1a10',
                cursor: 'pointer', fontFamily: "'Montserrat', sans-serif", transition: 'all 0.15s',
              }}
              onMouseEnter={e => { (e.target as HTMLElement).style.background = '#38e07b'; }}
              onMouseLeave={e => { (e.target as HTMLElement).style.background = '#5bde8a'; }}
            >
              Cadastrar
            </button>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer style={{ borderTop: '1px solid #2a2f45', background: '#0a0c12' }}>
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div style={{ background: '#5bde8a', borderRadius: '6px', width: '28px', height: '28px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ color: '#0a1a10', fontWeight: 900, fontSize: '13px' }}>V+</span>
            </div>
            <span style={{ fontWeight: 700, color: '#f0f2f5' }}>Viva+</span>
          </div>
          <p style={{ color: '#8891a8', fontSize: '13px' }}>
            © 2026 Viva+ · Saúde, Esportes & Nutrição em Caruaru
          </p>
          <div className="flex gap-6">
            {['Início', 'Mapa', 'Alimentação', 'Sobre'].map(link => (
              <a key={link} href="#" style={{ color: '#8891a8', fontSize: '13px', fontWeight: 500, textDecoration: 'none' }}
                className="hover:text-[#5bde8a] transition-colors">{link}</a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
