import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ThemeContext } from '../App';

const inputStyle: React.CSSProperties = {
  width: '100%', background: 'var(--theme-bg)', border: '1px solid var(--theme-border)',
  borderRadius: '10px', padding: '13px 16px', color: 'var(--theme-fg)',
  fontSize: '15px', outline: 'none', fontFamily: "'Montserrat', sans-serif",
  transition: 'border-color 0.2s',
};

const labelStyle: React.CSSProperties = {
  color: 'var(--theme-muted-foreground)', fontSize: '12px', fontWeight: 700,
  letterSpacing: '0.8px', display: 'block', marginBottom: '8px',
  textTransform: 'uppercase',
};

export default function Login() {
  const navigate = useNavigate();
  const [remember, setRemember] = useState(false);
  
  // Puxar a lógica do contexto global
  const { isDark, toggleTheme } = useContext(ThemeContext);

  // Função que será conectada ao Backend
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault(); // Evita o recarregamento da página
    
    // Simulação do token de autenticação
    localStorage.setItem('viva_token', 'token_gerado_pelo_backend_12345');
    navigate('/');
  };

  return (
    <div style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '48px 24px', background: 'var(--theme-bg)', transition: 'background 0.3s' }}>
      
      {/* Botão Flutuante de Modo Claro/Escuro */}
      <button
        onClick={toggleTheme}
        title={isDark ? "Mudar para Modo Claro" : "Mudar para Modo Escuro"}
        style={{
          position: 'absolute', top: '24px', right: '24px',
          padding: '10px 14px', borderRadius: '12px', fontSize: '20px',
          background: 'var(--theme-card)', border: '1px solid var(--theme-border)', color: 'var(--theme-fg)',
          cursor: 'pointer', transition: 'all 0.15s',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
        }}
        onMouseEnter={e => { (e.target as HTMLElement).style.borderColor = 'var(--theme-primary)'; }}
        onMouseLeave={e => { (e.target as HTMLElement).style.borderColor = 'var(--theme-border)'; }}
      >
        {isDark ? '☀️' : '🌙'}
      </button>

      <div style={{ width: '100%', maxWidth: '480px' }}>
        <div style={{
          background: 'var(--theme-card)', border: '1px solid var(--theme-border)',
          borderRadius: '24px', padding: '48px',
          boxShadow: '0 24px 64px rgba(0,0,0,0.2)',
          transition: 'background 0.3s, border 0.3s'
        }}>
          <div style={{ textAlign: 'center', marginBottom: '36px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {/* Ícone corrigido */}
          <img 
          src={`${import.meta.env.BASE_URL}logovivasemfundo.png`} 
          alt="Símbolo Viva+" 
          style={{ width: '72px', height: 'auto', marginBottom: '24px', filter: isDark ? 'none' : 'brightness(0.1)' }}/> 
          <h1 style={{ fontSize: '26px', fontWeight: 900, letterSpacing: '-1px', color: 'var(--theme-fg)', marginBottom: '8px' }}>
              Bem-vindo ao {' '}
              <span style={{ color: 'var(--theme-primary)' }}>Viva+</span>
            </h1>
            <p style={{ color: 'var(--theme-muted-foreground)', fontSize: '14px' }}>Entre para continuar sua jornada</p>
          </div>

          {/* O Form envolve os inputs para suportar a tecla "Enter" */}
          <form onSubmit={handleLogin}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '20px' }}>
              <div>
                <label style={labelStyle}>E-mail</label>
                <input
                  type="email" placeholder="joao@email.com" required
                  style={inputStyle}
                  onFocus={e => { (e.target as HTMLElement).style.borderColor = 'var(--theme-primary)'; }}
                  onBlur={e => { (e.target as HTMLElement).style.borderColor = 'var(--theme-border)'; }}
                />
              </div>
              <div>
                <label style={labelStyle}>Senha</label>
                <input
                  type="password" placeholder="••••••••" required
                  style={inputStyle}
                  onFocus={e => { (e.target as HTMLElement).style.borderColor = 'var(--theme-primary)'; }}
                  onBlur={e => { (e.target as HTMLElement).style.borderColor = 'var(--theme-border)'; }}
                />
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '28px' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
                <div
                  onClick={() => setRemember(!remember)}
                  style={{
                    width: '18px', height: '18px', borderRadius: '5px', cursor: 'pointer',
                    border: `2px solid ${remember ? 'var(--theme-primary)' : 'var(--theme-border)'}`,
                    background: remember ? 'var(--theme-primary)' : 'transparent',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    transition: 'all 0.15s', flexShrink: 0,
                  }}
                >
                  {remember && <span style={{ color: 'var(--theme-primary-fg)', fontSize: '12px', fontWeight: 900 }}>✓</span>}
                </div>
                <span style={{ color: 'var(--theme-muted-foreground)', fontSize: '13px', fontWeight: 600, userSelect: 'none' }}>Lembrar de mim</span>
              </label>
              <button type="button" style={{ background: 'none', border: 'none', color: 'var(--theme-primary)', fontSize: '13px', fontWeight: 700, cursor: 'pointer', fontFamily: "'Montserrat', sans-serif" }}>
                Esqueceu a senha?
              </button>
            </div>

            <button
              type="submit"
              style={{
                width: '100%', background: 'var(--theme-primary)', color: 'var(--theme-primary-fg)',
                fontWeight: 800, fontSize: '16px', padding: '16px',
                borderRadius: '12px', border: 'none', cursor: 'pointer',
                fontFamily: "'Montserrat', sans-serif", letterSpacing: '-0.3px',
                transition: 'all 0.2s', marginBottom: '24px',
              }}
              onMouseEnter={e => { (e.target as HTMLElement).style.background = 'var(--theme-ring)'; }}
              onMouseLeave={e => { (e.target as HTMLElement).style.background = 'var(--theme-primary)'; }}
            >
              Entrar →
            </button>
          </form>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
            <div style={{ flex: 1, height: '1px', background: 'var(--theme-border)' }} />
            <span style={{ color: 'var(--theme-muted-foreground)', fontSize: '13px', fontWeight: 600 }}>ou</span>
            <div style={{ flex: 1, height: '1px', background: 'var(--theme-border)' }} />
          </div>

          <button
            type="button"
            style={{
              width: '100%', background: 'transparent', border: '1px solid var(--theme-border)',
              color: 'var(--theme-fg)', fontWeight: 700, fontSize: '14px', padding: '13px',
              borderRadius: '12px', cursor: 'pointer', fontFamily: "'Montserrat', sans-serif",
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px',
              transition: 'all 0.15s', marginBottom: '24px',
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--theme-primary)'; (e.currentTarget as HTMLElement).style.color = 'var(--theme-primary)'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--theme-border)'; (e.currentTarget as HTMLElement).style.color = 'var(--theme-fg)'; }}
          >
            <svg width="18" height="18" viewBox="0 0 48 48" fill="none">
              <path d="M43.6 20.5H42V20H24v8h11.3C33.7 32.6 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.1 7.9 3l5.7-5.7C34.1 6.3 29.4 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.2-.1-2.4-.4-3.5z" fill="#FFC107"/>
              <path d="M6.3 14.7l6.6 4.8C14.6 16 19 12 24 12c3.1 0 5.8 1.1 7.9 3l5.7-5.7C34.1 6.3 29.4 4 24 4 16.3 4 9.7 8.3 6.3 14.7z" fill="#FF3D00"/>
              <path d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.5 26.7 36 24 36c-5.3 0-9.7-3.4-11.3-8l-6.5 5C9.7 39.7 16.3 44 24 44z" fill="#4CAF50"/>
              <path d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.3 4.1-4.2 5.4l6.2 5.2C37 38.1 44 33 44 24c0-1.2-.1-2.4-.4-3.5z" fill="#1976D2"/>
            </svg>
            Entrar com Google
          </button>

          <p style={{ textAlign: 'center', color: 'var(--theme-muted-foreground)', fontSize: '14px' }}>
            Ainda não tem uma conta?{' '}
            <button
              type="button"
              onClick={() => navigate('/cadastro')}
              style={{ background: 'none', border: 'none', color: 'var(--theme-primary)', fontWeight: 700, cursor: 'pointer', fontSize: '14px', fontFamily: "'Montserrat', sans-serif" }}
            >
              Cadastre-se
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
