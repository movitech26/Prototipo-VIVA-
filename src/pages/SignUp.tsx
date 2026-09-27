import { useState } from 'react';
import { useNavigate } from 'react-router';

const sports = [
  { id: 'skate', label: 'Skate', icon: '🛹' },
  { id: 'ciclismo', label: 'Ciclismo', icon: '🚴' },
  { id: 'basquete', label: 'Basquete', icon: '🏀' },
  { id: 'futsal', label: 'Futsal', icon: '⚽' },
  { id: 'areia', label: 'Quadra de Areia', icon: '🏐' },
  { id: 'tenis_mesa', label: 'Tênis de Mesa', icon: '🏓' },
  { id: 'corrida', label: 'Corrida', icon: '🏃' },
  { id: 'academia', label: 'Academias', icon: '🏋️' },
];

const inputStyle: React.CSSProperties = {
  width: '100%', background: '#252838', border: '1px solid #2a2f45',
  borderRadius: '10px', padding: '13px 16px', color: '#f0f2f5',
  fontSize: '15px', outline: 'none', fontFamily: "'Montserrat', sans-serif",
  transition: 'border-color 0.2s',
};

const labelStyle: React.CSSProperties = {
  color: '#8891a8', fontSize: '12px', fontWeight: 700,
  letterSpacing: '0.8px', display: 'block', marginBottom: '8px',
  textTransform: 'uppercase',
};

export default function SignUp() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState<string[]>([]);

  function toggle(id: string) {
    setSelected(prev => prev.includes(id) ? prev.filter(s => s !== id) : [...prev, id]);
  }

  return (
    <div style={{ minHeight: 'calc(100vh - 64px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '48px 24px' }}>
      <div style={{ width: '100%', maxWidth: '560px' }}>
        <div style={{
          background: '#1a1d27', border: '1px solid #2a2f45',
          borderRadius: '24px', padding: '48px',
          boxShadow: '0 24px 64px rgba(0,0,0,0.5)',
        }}>
          <div style={{ textAlign: 'center', marginBottom: '36px' }}>
            <h1 style={{ fontSize: '28px', fontWeight: 900, letterSpacing: '-1px', color: '#f0f2f5', marginBottom: '8px' }}>
              Crie sua conta no{' '}
              <span style={{ color: '#5bde8a' }}>Viva+</span>
            </h1>
            <p style={{ color: '#8891a8', fontSize: '14px' }}>Comece sua jornada de saúde e movimento</p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '28px' }}>
            {[
              { label: 'Nome Completo', placeholder: 'João da Silva', type: 'text' },
              { label: 'E-mail', placeholder: 'joao@email.com', type: 'email' },
              { label: 'Senha', placeholder: '••••••••', type: 'password' },
              { label: 'Confirmar Senha', placeholder: '••••••••', type: 'password' },
            ].map(f => (
              <div key={f.label}>
                <label style={labelStyle}>{f.label}</label>
                <input
                  type={f.type}
                  placeholder={f.placeholder}
                  style={inputStyle}
                  onFocus={e => { (e.target as HTMLElement).style.borderColor = '#5bde8a'; }}
                  onBlur={e => { (e.target as HTMLElement).style.borderColor = '#2a2f45'; }}
                />
              </div>
            ))}
          </div>

          {/* Sport selection */}
          <div style={{ marginBottom: '32px' }}>
            <div style={{ marginBottom: '16px' }}>
              <p style={{ fontWeight: 700, color: '#f0f2f5', fontSize: '15px', marginBottom: '6px' }}>Seus Esportes Favoritos</p>
              <p style={{ color: '#8891a8', fontSize: '13px', lineHeight: 1.6 }}>
                Quais esportes você pratica ou deseja praticar?{' '}
                <span style={{ color: '#5bde8a', fontWeight: 600 }}>Selecione uma ou mais opções.</span>
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px' }}>
              {sports.map(s => {
                const on = selected.includes(s.id);
                return (
                  <button
                    key={s.id}
                    onClick={() => toggle(s.id)}
                    style={{
                      padding: '12px 16px', borderRadius: '12px', cursor: 'pointer',
                      fontFamily: "'Montserrat', sans-serif", fontWeight: 700,
                      fontSize: '14px', display: 'flex', alignItems: 'center', gap: '10px',
                      transition: 'all 0.15s',
                      background: on ? 'rgba(91,222,138,0.12)' : '#252838',
                      border: `1.5px solid ${on ? '#5bde8a' : '#2a2f45'}`,
                      color: on ? '#5bde8a' : '#8891a8',
                    }}
                  >
                    <span style={{ fontSize: '20px' }}>{s.icon}</span>
                    {s.label}
                    {on && <span style={{ marginLeft: 'auto', fontSize: '14px' }}>✓</span>}
                  </button>
                );
              })}
            </div>
            {selected.length > 0 && (
              <p style={{ color: '#5bde8a', fontSize: '12px', fontWeight: 600, marginTop: '10px' }}>
                {selected.length} esporte{selected.length > 1 ? 's' : ''} selecionado{selected.length > 1 ? 's' : ''}
              </p>
            )}
          </div>

          <button
            style={{
              width: '100%', background: '#5bde8a', color: '#0a1a10',
              fontWeight: 800, fontSize: '16px', padding: '16px',
              borderRadius: '12px', border: 'none', cursor: 'pointer',
              fontFamily: "'Montserrat', sans-serif", letterSpacing: '-0.3px',
              transition: 'all 0.2s', marginBottom: '20px',
            }}
            onMouseEnter={e => { (e.target as HTMLElement).style.background = '#38e07b'; }}
            onMouseLeave={e => { (e.target as HTMLElement).style.background = '#5bde8a'; }}
          >
            Criar Minha Conta →
          </button>

          <p style={{ textAlign: 'center', color: '#8891a8', fontSize: '14px' }}>
            Já possui uma conta?{' '}
            <button
              onClick={() => navigate('/login')}
              style={{ background: 'none', border: 'none', color: '#5bde8a', fontWeight: 700, cursor: 'pointer', fontSize: '14px', fontFamily: "'Montserrat', sans-serif" }}
            >
              Entrar
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
