import { useNavigate } from 'react-router';

const spots = [
  {
    id: 1,
    name: 'Pista de Skate — Parque 18 de Maio',
    type: 'Skate',
    desc: 'Pista pública com bowl e street, aberta ao público 24h.',
    img: 'https://images.unsplash.com/photo-1547447134-cd3f5c716030?w=600&h=360&fit=crop&auto=format',
    badge: '🛹',
  },
  {
    id: 2,
    name: 'Quadra Poliesportiva — Bairro Universitário',
    type: 'Quadra',
    desc: 'Quadra coberta para futsal, basquete e vôlei. Iluminação noturna.',
    img: 'https://images.unsplash.com/photo-1574623452334-1e0ac2b3ccb4?w=600&h=360&fit=crop&auto=format',
    badge: '🏀',
  },
  {
    id: 3,
    name: 'Ciclovia — Av. Rio Branco',
    type: 'Ciclovia',
    desc: '4,2 km de ciclovia contínua com sinalização e pontos de descanso.',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=360&fit=crop&auto=format',
    badge: '🚴',
  },
];

export default function Home() {
  const navigate = useNavigate();

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden" style={{ minHeight: '88vh', display: 'flex', alignItems: 'center' }}>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1440&h=900&fit=crop&auto=format)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.25)',
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, rgba(91,222,138,0.15) 0%, transparent 60%, rgba(15,17,23,0.8) 100%)',
          }}
        />

        {/* diagonal accent line */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div style={{
            position: 'absolute', top: 0, right: '20%',
            width: '1px', height: '100%',
            background: 'linear-gradient(180deg, transparent, #5bde8a33, transparent)',
          }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-2 gap-16 items-center w-full">
          <div>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              background: 'rgba(91,222,138,0.12)', border: '1px solid rgba(91,222,138,0.3)',
              borderRadius: '100px', padding: '6px 14px', marginBottom: '28px',
            }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#5bde8a', display: 'inline-block' }} />
              <span style={{ color: '#5bde8a', fontSize: '12px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase' }}>Caruaru · PE</span>
            </div>

            <h1 style={{
              fontSize: 'clamp(2.8rem, 5vw, 5rem)',
              fontWeight: 900,
              lineHeight: 1.0,
              letterSpacing: '-2px',
              marginBottom: '24px',
              color: '#f0f2f5',
            }}>
              Mais<br />
              <span style={{ color: '#5bde8a' }}>movimento.</span><br />
              Mais vida.
            </h1>

            <p style={{ fontSize: '18px', color: '#8891a8', lineHeight: 1.7, marginBottom: '40px', maxWidth: '460px' }}>
              Descubra os melhores locais de prática esportiva em Caruaru, calcule sua dieta ideal e transforme seu estilo de vida com o Viva+.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => navigate('/mapa')}
                style={{
                  background: '#5bde8a', color: '#0a1a10', fontWeight: 800,
                  fontSize: '15px', padding: '14px 32px', borderRadius: '10px',
                  border: 'none', cursor: 'pointer', letterSpacing: '-0.3px',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={e => { (e.target as HTMLElement).style.background = '#38e07b'; (e.target as HTMLElement).style.transform = 'translateY(-2px)'; }}
                onMouseLeave={e => { (e.target as HTMLElement).style.background = '#5bde8a'; (e.target as HTMLElement).style.transform = 'translateY(0)'; }}
              >
                Explorar Locais →
              </button>
              <button
                onClick={() => navigate('/alimentacao')}
                style={{
                  background: 'transparent', color: '#f0f2f5', fontWeight: 700,
                  fontSize: '15px', padding: '14px 32px', borderRadius: '10px',
                  border: '1px solid #2a2f45', cursor: 'pointer',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={e => { (e.target as HTMLElement).style.borderColor = '#5bde8a'; (e.target as HTMLElement).style.color = '#5bde8a'; }}
                onMouseLeave={e => { (e.target as HTMLElement).style.borderColor = '#2a2f45'; (e.target as HTMLElement).style.color = '#f0f2f5'; }}
              >
                Calcular Dieta
              </button>
            </div>
          </div>

          <div className="hidden md:flex flex-col gap-4">
            {[
              { label: 'Locais mapeados', value: '37+', sub: 'em Caruaru' },
              { label: 'Kcal calculadas', value: '12k', sub: 'este mês' },
              { label: 'Categorias', value: '8', sub: 'de atividade' },
            ].map(stat => (
              <div key={stat.label} style={{
                background: 'rgba(26,29,39,0.85)', border: '1px solid #2a2f45',
                borderRadius: '12px', padding: '20px 24px',
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                backdropFilter: 'blur(8px)',
              }}>
                <span style={{ color: '#8891a8', fontSize: '14px', fontWeight: 600 }}>{stat.label}</span>
                <div className="text-right">
                  <div style={{ color: '#5bde8a', fontSize: '28px', fontWeight: 900, lineHeight: 1 }}>{stat.value}</div>
                  <div style={{ color: '#8891a8', fontSize: '12px' }}>{stat.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Locais em Caruaru */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
          <div>
            <span style={{ color: '#5bde8a', fontSize: '12px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase' }}>Esportes</span>
            <h2 style={{ fontSize: 'clamp(2rem, 3vw, 2.8rem)', fontWeight: 800, letterSpacing: '-1px', marginTop: '8px', color: '#f0f2f5' }}>
              Locais em Caruaru
            </h2>
          </div>
          <button
            onClick={() => navigate('/mapa')}
            style={{ color: '#5bde8a', fontSize: '14px', fontWeight: 700, background: 'none', border: 'none', cursor: 'pointer' }}
          >
            Ver todos no mapa →
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {spots.map(spot => (
            <div
              key={spot.id}
              style={{
                background: '#1a1d27', border: '1px solid #2a2f45',
                borderRadius: '16px', overflow: 'hidden',
                transition: 'transform 0.2s, border-color 0.2s',
                cursor: 'pointer',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)'; (e.currentTarget as HTMLElement).style.borderColor = '#5bde8a55'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; (e.currentTarget as HTMLElement).style.borderColor = '#2a2f45'; }}
            >
              <div style={{ position: 'relative', height: '200px', background: '#252838' }}>
                <img src={spot.img} alt={spot.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{
                  position: 'absolute', top: '12px', left: '12px',
                  background: 'rgba(15,17,23,0.85)', backdropFilter: 'blur(8px)',
                  borderRadius: '8px', padding: '4px 10px',
                  fontSize: '12px', fontWeight: 700, color: '#5bde8a',
                  border: '1px solid rgba(91,222,138,0.3)',
                }}>
                  {spot.badge} {spot.type}
                </div>
              </div>
              <div style={{ padding: '20px' }}>
                <h3 style={{ fontWeight: 700, fontSize: '16px', color: '#f0f2f5', marginBottom: '8px', letterSpacing: '-0.3px' }}>{spot.name}</h3>
                <p style={{ color: '#8891a8', fontSize: '14px', lineHeight: 1.6, marginBottom: '16px' }}>{spot.desc}</p>
                <button
                  onClick={() => navigate('/mapa')}
                  style={{
                    width: '100%', background: 'transparent', border: '1px solid #2a2f45',
                    color: '#c8ccd8', borderRadius: '8px', padding: '10px',
                    fontSize: '13px', fontWeight: 600, cursor: 'pointer',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = '#5bde8a'; (e.currentTarget as HTMLElement).style.color = '#5bde8a'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = '#2a2f45'; (e.currentTarget as HTMLElement).style.color = '#c8ccd8'; }}
                >
                  Ver no Mapa
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Alimentação & TMB */}
      <section style={{ background: '#1a1d27', borderTop: '1px solid #2a2f45', borderBottom: '1px solid #2a2f45' }}>
        <div className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <span style={{ color: '#5bde8a', fontSize: '12px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase' }}>Nutrição</span>
            <h2 style={{ fontSize: 'clamp(1.8rem, 2.5vw, 2.4rem)', fontWeight: 800, letterSpacing: '-1px', margin: '12px 0 20px', color: '#f0f2f5' }}>
              Alimentação &amp; TMB
            </h2>
            <p style={{ color: '#8891a8', fontSize: '16px', lineHeight: 1.8, marginBottom: '16px' }}>
              A <strong style={{ color: '#f0f2f5' }}>Taxa Metabólica Basal (TMB)</strong> é a quantidade mínima de energia que seu corpo precisa em repouso. Conhecê-la é o primeiro passo para uma dieta eficaz.
            </p>
            <p style={{ color: '#8891a8', fontSize: '16px', lineHeight: 1.8, marginBottom: '32px' }}>
              Nossa calculadora usa a equação de Harris-Benedict revisada para estimar sua TMB e sugere quantidades de alimentos base como arroz, feijão e proteínas para cada refeição.
            </p>
            <button
              onClick={() => navigate('/alimentacao')}
              style={{
                background: '#5bde8a', color: '#0a1a10', fontWeight: 800,
                fontSize: '15px', padding: '14px 32px', borderRadius: '10px',
                border: 'none', cursor: 'pointer', transition: 'all 0.2s',
              }}
              onMouseEnter={e => { (e.target as HTMLElement).style.background = '#38e07b'; }}
              onMouseLeave={e => { (e.target as HTMLElement).style.background = '#5bde8a'; }}
            >
              Calcular Minha Dieta →
            </button>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            {[
              { icon: '⚡', label: 'TMB', desc: 'Taxa Metabólica Basal calculada com precisão' },
              { icon: '🍚', label: 'Arroz', desc: 'Gramas ideais por refeição' },
              { icon: '🫘', label: 'Feijão', desc: 'Porção equilibrada de leguminosas' },
              { icon: '🥩', label: 'Proteína', desc: 'Quantidade adequada ao seu objetivo' },
            ].map(item => (
              <div key={item.label} style={{
                background: '#252838', border: '1px solid #2a2f45',
                borderRadius: '12px', padding: '20px',
              }}>
                <div style={{ fontSize: '28px', marginBottom: '10px' }}>{item.icon}</div>
                <div style={{ fontWeight: 700, color: '#f0f2f5', marginBottom: '6px', fontSize: '15px' }}>{item.label}</div>
                <div style={{ color: '#8891a8', fontSize: '13px', lineHeight: 1.5 }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
