import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
  width: '100%',
  boxSizing: 'border-box',
  background: '#252838',
  border: '1px solid #2a2f45',
  borderRadius: '10px',
  padding: '13px 16px',
  color: '#f0f2f5',
  fontSize: '15px',
  outline: 'none',
  fontFamily: "'Montserrat', sans-serif",
  transition: 'border-color 0.2s',
};

const labelStyle: React.CSSProperties = {
  color: '#8891a8',
  fontSize: '12px',
  fontWeight: 700,
  letterSpacing: '0.8px',
  display: 'block',
  marginBottom: '8px',
  textTransform: 'uppercase',
};

export default function SignUp() {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [selected, setSelected] = useState<string[]>([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  function toggle(id: string) {
    setSelected((prev) =>
      prev.includes(id)
        ? prev.filter((s) => s !== id)
        : [...prev, id]
    );

    setError('');
  }

  function handleSubmit() {
    setError('');

    const trimmedName = name.trim();
    const trimmedEmail = email.trim().toLowerCase();

    if (!trimmedName) {
      setError('Digite seu nome completo.');
      return;
    }

    if (!trimmedEmail) {
      setError('Digite seu e-mail.');
      return;
    }

    if (!trimmedEmail.includes('@')) {
      setError('Digite um e-mail válido.');
      return;
    }

    if (!password) {
      setError('Digite uma senha.');
      return;
    }

    if (password.length < 6) {
      setError('A senha deve ter pelo menos 6 caracteres.');
      return;
    }

    if (password !== confirmPassword) {
      setError('As senhas não coincidem.');
      return;
    }

    if (selected.length === 0) {
      setError('Selecione pelo menos um esporte favorito.');
      return;
    }

    setLoading(true);

    const user = {
      id: Date.now(),
      name: trimmedName,
      email: trimmedEmail,
      password,
      sports: selected,
    };

    try {
      localStorage.setItem('viva_user', JSON.stringify(user));

      // Token simples para liberar as rotas protegidas.
      localStorage.setItem(
        'viva_token',
        `viva_${Date.now()}_${Math.random().toString(36).slice(2)}`
      );

      navigate('/', { replace: true });
    } catch {
      setError('Não foi possível criar a conta. Tente novamente.');
      setLoading(false);
    }
  }

  return (
    <div
      style={{
        minHeight: 'calc(100vh - 64px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '48px 24px',
      }}
    >
      <div style={{ width: '100%', maxWidth: '560px' }}>
        <div
          style={{
            background: '#1a1d27',
            border: '1px solid #2a2f45',
            borderRadius: '24px',
            padding: '48px',
            boxShadow: '0 24px 64px rgba(0,0,0,0.5)',
          }}
        >
          <div style={{ textAlign: 'center', marginBottom: '36px' }}>
            <h1
              style={{
                fontSize: '28px',
                fontWeight: 900,
                letterSpacing: '-1px',
                color: '#f0f2f5',
                marginBottom: '8px',
              }}
            >
              Crie sua conta no{' '}
              <span style={{ color: '#5bde8a' }}>Viva+</span>
            </h1>

            <p style={{ color: '#8891a8', fontSize: '14px' }}>
              Comece sua jornada de saúde e movimento
            </p>
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              marginBottom: '28px',
            }}
          >
            <div>
              <label style={labelStyle}>Nome Completo</label>

              <input
                type="text"
                placeholder="João da Silva"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  setError('');
                }}
                style={inputStyle}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = '#5bde8a';
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = '#2a2f45';
                }}
              />
            </div>

            <div>
              <label style={labelStyle}>E-mail</label>

              <input
                type="email"
                placeholder="joao@email.com"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setError('');
                }}
                style={inputStyle}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = '#5bde8a';
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = '#2a2f45';
                }}
              />
            </div>

            <div>
              <label style={labelStyle}>Senha</label>

              <input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError('');
                }}
                style={inputStyle}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = '#5bde8a';
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = '#2a2f45';
                }}
              />
            </div>

            <div>
              <label style={labelStyle}>Confirmar Senha</label>

              <input
                type="password"
                placeholder="••••••••"
                value={confirmPassword}
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                  setError('');
                }}
                style={inputStyle}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = '#5bde8a';
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = '#2a2f45';
                }}
              />
            </div>
          </div>

          {/* Sport selection */}
          <div style={{ marginBottom: '28px' }}>
            <div style={{ marginBottom: '16px' }}>
              <p
                style={{
                  fontWeight: 700, 
                         </p>
        </div>
      </div>
    </div>
  );
}

