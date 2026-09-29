import { NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { ThemeContext } from '../App';

const navLinks = [
  { to: '/', label: 'Início', end: true },
  { to: '/mapa', label: 'Mapa' },
  { to: '/alimentacao', label: 'Alimentação' },
  { to: '#sobre', label: 'Sobre' },
];

export default function Layout() {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Puxa o estado e a função do contexto global gerido no App.tsx
  const { isDark, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="min-h-screen flex flex-col transition-colors duration-300" style={{ background: 'var(--theme-bg)', color: 'var(--theme-fg)', fontFamily: "'Montserrat', sans-serif" }}>
      
      <header style={{ borderBottom: '1px solid var(--theme-border)', background: 'color-mix(in srgb, var(--theme-bg) 95%, transparent)', backdropFilter: 'blur(12px)' }} className="sticky top-0 z-50 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <NavLink to="/" className="flex items-center gap-2 group">
            {/* Caminho da imagem atualizado */}
            <img src={`${import.meta.env.BASE_URL}Icon.png`} alt="Símbolo Viva+" style={{ width: '36px', height: 'auto', filter: isDark ? 'none' : 'brightness(0.1)'}}/>
            <span style={{ fontWeight: 800, fontSize: '20px', letterSpacing: '-0.5px', color: 'var(--theme-fg)' }}></span>
          </NavLink>

          <nav className="flex items-center gap-1">
            {navLinks.map(({ to, label, end }) => (
              <NavLink
                key={to}
                to={to}
                end={end}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-lg text-sm transition-all duration-200 ${
                    isActive && to !== '#sobre'
                      ? 'font-bold'
                      : 'font-semibold hover:opacity-80'
                  }`
                }
                style={({ isActive }) => ({
                  color: isActive && to !== '#sobre' ? 'var(--theme-primary)' : 'var(--theme-muted-foreground)',
                  background: isActive && to !== '#sobre' ? 'var(--theme-card)' : 'transparent',
                })}
              >
                {label}
              </NavLink>
            ))}
            
            <div style={{ width: '1px', height: '20px', background: 'var(--theme-border)', margin: '0 8px' }} />
            
            <button
              onClick={toggleTheme}
              title={isDark ? "Mudar para Modo Claro" : "Mudar para Modo Escuro"}
              style={{
                padding: '8px', borderRadius: '8px', fontSize: '16px',
                background: 'transparent', border: '1px solid var(--theme-border)', color: 'var(--theme-fg)',
                cursor: 'pointer', marginRight: '8px', transition: 'all 0.15s'
              }}
              onMouseEnter={e => { (e.target as HTMLElement).style.background = 'var(--theme-card)'; }}
              onMouseLeave={e => { (e.target as HTMLElement).style.background = 'transparent'; }}
            >
              {isDark ? '☀️' : '🌙'}
            </button>

            {/* Botão de Sair substituindo Entrar/Cadastrar */}
            <button
              onClick={() => {
                localStorage.removeItem('viva_token');
                navigate('/login');
              }}
              style={{
                padding: '8px 16px', borderRadius: '8px', fontSize: '14px', fontWeight: 600,
                background: 'transparent', border: '1px solid var(--theme-border)', color: 'var(--theme-fg)',
                cursor: 'pointer', fontFamily: "'Montserrat', sans-serif", transition: 'all 0.15s',
              }}
              onMouseEnter={e => { (e.target as HTMLElement).style.borderColor = '#ef4444'; (e.target as HTMLElement).style.color = '#ef4444'; }}
              onMouseLeave={e => { (e.target as HTMLElement).style.borderColor = 'var(--theme-border)'; (e.target as HTMLElement).style.color = 'var(--theme-fg)'; }}
            >
              Sair
            </button>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer style={{ borderTop: '1px solid var(--theme-border)', background: 'var(--theme-card)' }} className="transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          
          <div className="flex items-center">
            {/* Caminho da imagem atualizado */}
            <img src={`${import.meta.env.BASE_URL}movimodoescuro.png`} alt="Símbolo Viva+" style={{ width: '80px', height: 'auto', filter: isDark ? 'none' : 'brightness(0.1)'}}/>
          </div>
          
          <p style={{ color: 'var(--theme-muted-foreground)', fontSize: '13px' }}>
            © 2026 Viva+ · Saúde, Esportes & Nutrição em Caruaru
          </p>
          <div className="flex gap-6">
            {['Início', 'Mapa', 'Alimentação', 'Sobre'].map(link => (
              <a key={link} href="#" style={{ color: 'var(--theme-muted-foreground)', fontSize: '13px', fontWeight: 500, textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={e => { (e.target as HTMLElement).style.color = 'var(--theme-primary)'; }}
                onMouseLeave={e => { (e.target as HTMLElement).style.color = 'var(--theme-muted-foreground)'; }}
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
