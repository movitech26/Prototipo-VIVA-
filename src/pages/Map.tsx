import { useState } from 'react';

const categories = ['Todos', 'Ciclovias', 'Pistas de Skate', 'Quadras de Areia', 'Tênis de Mesa', 'Futsal / Basquete', 'Academias'];

const allSpots = [
  {
    id: 1, name: 'Pista de Skate — Parque 18 de Maio', cat: 'Pistas de Skate',
    addr: 'Parque 18 de Maio, Centro, Caruaru-PE',
    img: 'https://images.unsplash.com/photo-1547447134-cd3f5c716030?w=400&h=220&fit=crop&auto=format',
    badge: '🛹', lat: 40, lng: 30,
  },
  {
    id: 2, name: 'Quadra de Futsal — Bairro Universitário', cat: 'Futsal / Basquete',
    addr: 'Rua José Mariano, Bairro Universitário, Caruaru-PE',
    img: 'https://images.unsplash.com/photo-1574623452334-1e0ac2b3ccb4?w=400&h=220&fit=crop&auto=format',
    badge: '⚽', lat: 55, lng: 45,
  },
  {
    id: 3, name: 'Ciclovia — Av. Rio Branco', cat: 'Ciclovias',
    addr: 'Av. Rio Branco, Centro, Caruaru-PE',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=220&fit=crop&auto=format',
    badge: '🚴', lat: 25, lng: 60,
  },
  {
    id: 4, name: 'Academia Popular — SESC Caruaru', cat: 'Academias',
    addr: 'Av. Agamenon Magalhães, Caruaru-PE',
    img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=220&fit=crop&auto=format',
    badge: '🏋️', lat: 68, lng: 25,
  },
  {
    id: 5, name: 'Ciclovia — Açude de Tabocas', cat: 'Ciclovias',
    addr: 'Entorno do Açude Tabocas, Caruaru-PE',
    img: 'https://images.unsplash.com/photo-1544191696-15693072e0de?w=400&h=220&fit=crop&auto=format',
    badge: '🚴', lat: 75, lng: 65,
  },
  {
    id: 6, name: 'Quadra de Areia — Parque da Cidade', cat: 'Quadras de Areia',
    addr: 'Parque da Cidade, Caruaru-PE',
    img: 'https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?w=400&h=220&fit=crop&auto=format',
    badge: '🏐', lat: 35, lng: 75,
  },
  {
    id: 7, name: 'Mesa de Tênis — Praça da Integração', cat: 'Tênis de Mesa',
    addr: 'Praça da Integração, Centro, Caruaru-PE',
    img: 'https://images.unsplash.com/photo-1544298621-35a989e4e54a?w=400&h=220&fit=crop&auto=format',
    badge: '🏓', lat: 50, lng: 55,
  },
  {
    id: 8, name: 'Quadra de Basquete — Maurício de Nassau', cat: 'Futsal / Basquete',
    addr: 'Colégio Maurício de Nassau, Caruaru-PE',
    img: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=400&h=220&fit=crop&auto=format',
    badge: '🏀', lat: 62, lng: 40,
  },
];

export default function MapPage() {
  const [activeFilter, setActiveFilter] = useState('Todos');
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState<number | null>(null);

  const filtered = allSpots.filter(s => {
    const matchCat = activeFilter === 'Todos' || s.cat === activeFilter;
    const matchSearch = s.name.toLowerCase().includes(search.toLowerCase()) ||
      s.addr.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: 'calc(100vh - 64px)' }}>
      {/* Top bar */}
      <div style={{ borderBottom: '1px solid #2a2f45', background: '#1a1d27', padding: '16px 24px' }}>
        <div className="max-w-7xl mx-auto flex flex-wrap gap-4 items-center">
          <div style={{ position: 'relative', flex: '1 1 280px' }}>
            <span style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: '#8891a8', fontSize: '16px' }}>🔍</span>
            <input
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Buscar locais em Caruaru..."
              style={{
                width: '100%', background: '#252838', border: '1px solid #2a2f45',
                borderRadius: '10px', padding: '10px 14px 10px 38px',
                color: '#f0f2f5', fontSize: '14px', outline: 'none',
                fontFamily: "'Montserrat', sans-serif",
              }}
            />
          </div>
          <div className="flex gap-2 flex-wrap">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                style={{
                  padding: '8px 16px', borderRadius: '8px', fontSize: '13px', fontWeight: 600,
                  cursor: 'pointer', transition: 'all 0.15s', fontFamily: "'Montserrat', sans-serif",
                  background: activeFilter === cat ? '#5bde8a' : '#252838',
                  color: activeFilter === cat ? '#0a1a10' : '#8891a8',
                  border: `1px solid ${activeFilter === cat ? '#5bde8a' : '#2a2f45'}`,
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 max-w-7xl mx-auto w-full px-6 py-6 gap-6 flex-wrap md:flex-nowrap">
        {/* Left: spot list */}
        <div style={{ width: '100%', maxWidth: '420px', minWidth: '280px', display: 'flex', flexDirection: 'column', gap: '16px', overflowY: 'auto', maxHeight: '76vh' }}>
          <p style={{ color: '#8891a8', fontSize: '13px', fontWeight: 600 }}>
            {filtered.length} local{filtered.length !== 1 ? 'is' : ''} encontrado{filtered.length !== 1 ? 's' : ''}
          </p>
          {filtered.map(spot => (
            <div
              key={spot.id}
              onClick={() => setSelected(spot.id === selected ? null : spot.id)}
              style={{
                background: selected === spot.id ? '#1e2235' : '#1a1d27',
                border: `1px solid ${selected === spot.id ? '#5bde8a55' : '#2a2f45'}`,
                borderRadius: '12px', overflow: 'hidden', cursor: 'pointer',
                transition: 'all 0.2s',
              }}
            >
              <div style={{ height: '140px', background: '#252838' }}>
                <img src={spot.img} alt={spot.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ padding: '14px' }}>
                <div style={{ display: 'flex', gap: '8px', alignItems: 'flex-start', marginBottom: '6px' }}>
                  <span style={{ fontSize: '18px' }}>{spot.badge}</span>
                  <h3 style={{ fontWeight: 700, fontSize: '14px', color: '#f0f2f5', lineHeight: 1.3 }}>{spot.name}</h3>
                </div>
                <p style={{ color: '#8891a8', fontSize: '12px', marginBottom: '12px', paddingLeft: '26px' }}>📍 {spot.addr}</p>
                <button
                  style={{
                    width: '100%', background: selected === spot.id ? '#5bde8a' : 'transparent',
                    border: `1px solid ${selected === spot.id ? '#5bde8a' : '#2a2f45'}`,
                    color: selected === spot.id ? '#0a1a10' : '#c8ccd8',
                    borderRadius: '8px', padding: '8px', fontSize: '13px', fontWeight: 700,
                    cursor: 'pointer', fontFamily: "'Montserrat', sans-serif",
                  }}
                >
                  {selected === spot.id ? '✓ Selecionado' : 'Ver Detalhes'}
                </button>
              </div>
            </div>
          ))}
          {filtered.length === 0 && (
            <div style={{ textAlign: 'center', padding: '40px 0', color: '#8891a8' }}>
              <div style={{ fontSize: '40px', marginBottom: '12px' }}>🗺️</div>
              <p style={{ fontWeight: 600 }}>Nenhum local encontrado</p>
            </div>
          )}
        </div>

        {/* Right: map */}
        <div style={{ flex: 1, minHeight: '500px', background: '#1a1d27', border: '1px solid #2a2f45', borderRadius: '16px', position: 'relative', overflow: 'hidden' }}>
          {/* Simulated map grid */}
          <div style={{ position: 'absolute', inset: 0 }}>
            <svg width="100%" height="100%" style={{ opacity: 0.08 }}>
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#5bde8a" strokeWidth="0.5"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>

          {/* Road-like lines */}
          <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.15 }}>
            <line x1="0%" y1="40%" x2="100%" y2="38%" stroke="#5bde8a" strokeWidth="3"/>
            <line x1="0%" y1="65%" x2="100%" y2="60%" stroke="#5bde8a" strokeWidth="2"/>
            <line x1="30%" y1="0%" x2="35%" y2="100%" stroke="#5bde8a" strokeWidth="3"/>
            <line x1="60%" y1="0%" x2="65%" y2="100%" stroke="#5bde8a" strokeWidth="2"/>
            <line x1="10%" y1="0%" x2="15%" y2="100%" stroke="#5bde8a" strokeWidth="1"/>
            <line x1="80%" y1="0%" x2="82%" y2="100%" stroke="#5bde8a" strokeWidth="1.5"/>
          </svg>

          {/* Map label */}
          <div style={{
            position: 'absolute', top: '16px', left: '16px',
            background: 'rgba(15,17,23,0.9)', border: '1px solid #2a2f45',
            borderRadius: '8px', padding: '8px 14px', backdropFilter: 'blur(8px)',
          }}>
            <span style={{ color: '#5bde8a', fontWeight: 700, fontSize: '13px' }}>🗺️ Caruaru, PE</span>
          </div>

          {/* Pins */}
          {filtered.map(spot => (
            <div
              key={spot.id}
              onClick={() => setSelected(spot.id === selected ? null : spot.id)}
              style={{
                position: 'absolute',
                left: `${spot.lng}%`,
                top: `${spot.lat}%`,
                transform: 'translate(-50%, -100%)',
                cursor: 'pointer',
                zIndex: selected === spot.id ? 10 : 5,
                transition: 'transform 0.2s',
                filter: selected === spot.id ? 'drop-shadow(0 0 12px #5bde8a)' : 'none',
              }}
            >
              <div style={{
                background: selected === spot.id ? '#5bde8a' : '#1a1d27',
                border: `2px solid ${selected === spot.id ? '#38e07b' : '#5bde8a'}`,
                borderRadius: '50% 50% 50% 0',
                transform: 'rotate(-45deg)',
                width: '36px', height: '36px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <span style={{ transform: 'rotate(45deg)', fontSize: '16px' }}>{spot.badge}</span>
              </div>
              {selected === spot.id && (
                <div style={{
                  position: 'absolute', bottom: '50px', left: '50%', transform: 'translateX(-50%)',
                  background: '#1a1d27', border: '1px solid #5bde8a55',
                  borderRadius: '10px', padding: '10px 14px', minWidth: '180px',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.5)',
                }}>
                  <p style={{ fontWeight: 700, fontSize: '13px', color: '#f0f2f5', marginBottom: '4px' }}>{spot.name}</p>
                  <p style={{ fontSize: '11px', color: '#8891a8' }}>{spot.cat}</p>
                </div>
              )}
            </div>
          ))}

          {/* Zoom controls */}
          <div style={{
            position: 'absolute', bottom: '16px', right: '16px',
            display: 'flex', flexDirection: 'column', gap: '4px',
          }}>
            {['+', '−'].map(btn => (
              <button key={btn} style={{
                width: '36px', height: '36px', background: '#1a1d27',
                border: '1px solid #2a2f45', borderRadius: '8px',
                color: '#f0f2f5', fontSize: '18px', fontWeight: 700,
                cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>{btn}</button>
            ))}
          </div>

          {/* Legend */}
          <div style={{
            position: 'absolute', bottom: '16px', left: '16px',
            background: 'rgba(15,17,23,0.9)', border: '1px solid #2a2f45',
            borderRadius: '10px', padding: '12px 16px', backdropFilter: 'blur(8px)',
          }}>
            <p style={{ color: '#8891a8', fontSize: '11px', fontWeight: 700, marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '1px' }}>Legenda</p>
            {['Ciclovia 🚴', 'Skate 🛹', 'Quadra 🏀', 'Academia 🏋️'].map(l => (
              <div key={l} style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#5bde8a' }} />
                <span style={{ fontSize: '12px', color: '#c8ccd8' }}>{l}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
