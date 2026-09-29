import { useState } from 'react';

type ActivityLevel =
  | 'sedentario'
  | 'leve'
  | 'moderado'
  | 'intenso'
  | 'muito_intenso';

type Sex = 'masculino' | 'feminino';

const activityOptions: {
  value: ActivityLevel;
  label: string;
  factor: number;
  desc: string;
}[] = [
  {
    value: 'sedentario',
    label: 'Sedentário',
    factor: 1.2,
    desc: 'Pouco ou nenhum exercício',
  },
  {
    value: 'leve',
    label: 'Levemente ativo',
    factor: 1.375,
    desc: '1–3 dias por semana',
  },
  {
    value: 'moderado',
    label: 'Moderadamente ativo',
    factor: 1.55,
    desc: '3–5 dias por semana',
  },
  {
    value: 'intenso',
    label: 'Muito ativo',
    factor: 1.725,
    desc: '6–7 dias por semana',
  },
  {
    value: 'muito_intenso',
    label: 'Extremamente ativo',
    factor: 1.9,
    desc: 'Atleta ou trabalho físico intenso',
  },
];

interface Result {
  tmb: number;
  tdee: number;
  meals: {
    name: string;
    icon: string;
    grams: number;
    unit: string;
  }[];
}

function calcTMB(
  age: number,
  weight: number,
  height: number,
  sex: Sex
): number {
  if (sex === 'masculino') {
    return 88.36 + 13.4 * weight + 4.8 * height - 5.7 * age;
  }

  return 447.6 + 9.2 * weight + 3.1 * height - 4.3 * age;
}

export default function Calculator() {
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [sex, setSex] = useState<Sex>('masculino');
  const [activity, setActivity] =
    useState<ActivityLevel>('moderado');
  const [result, setResult] = useState<Result | null>(null);
  const [error, setError] = useState('');

  function handleCalc() {
    const a = parseInt(age);
    const w = parseFloat(weight);
    const h = parseFloat(height);

    if (
      !a ||
      !w ||
      !h ||
      a < 10 ||
      a > 120 ||
      w < 20 ||
      w > 300 ||
      h < 100 ||
      h > 250
    ) {
      setError('Por favor, verifique os valores inseridos.');
      return;
    }

    setError('');

    const factor = activityOptions.find(
      (o) => o.value === activity
    )!.factor;

    const tmb = calcTMB(a, w, h, sex);
    const tdee = tmb * factor;
    const protein = w * 1.8;

    setResult({
      tmb: Math.round(tmb),
      tdee: Math.round(tdee),
      meals: [
        {
          name: 'Arroz cozido',
          icon: '🍚',
          grams: Math.round((tdee * 0.3) / 1.3),
          unit: 'g / dia',
        },
        {
          name: 'Feijão cozido',
          icon: '🫘',
          grams: Math.round((tdee * 0.1) / 0.77),
          unit: 'g / dia',
        },
        {
          name: 'Proteína (carne/frango)',
          icon: '🥩',
          grams: Math.round(protein),
          unit: 'g / dia',
        },
        {
          name: 'Vegetais e verduras',
          icon: '🥦',
          grams: Math.round(
            300 + (tdee - 2000) * 0.05
          ),
          unit: 'g / dia',
        },
      ],
    });
  }

  const inputStyle = {
    width: '100%',
    background: 'var(--theme-bg)',
    border: '1px solid var(--theme-border)',
    borderRadius: '10px',
    padding: '12px 14px',
    color: 'var(--theme-fg)',
    fontSize: '15px',
    outline: 'none',
    fontFamily: "'Montserrat', sans-serif",
    transition: 'border-color 0.2s, box-shadow 0.2s',
  };

  const labelStyle = {
    color: 'var(--theme-muted-foreground)',
    fontSize: '13px',
    fontWeight: 700,
    letterSpacing: '0.5px',
    display: 'block',
    marginBottom: '8px',
  };

  const cardShadow =
    '0 10px 30px rgba(15, 17, 23, 0.08)';

  const smallCardShadow =
    '0 4px 14px rgba(15, 17, 23, 0.05)';

  return (
    <div
      className="max-w-7xl mx-auto px-6 py-16"
      style={{
        minHeight: 'calc(100vh - 64px)',
        background: 'var(--theme-bg)',
        color: 'var(--theme-fg)',
        transition:
          'background-color 0.3s, color 0.3s',
      }}
    >
      <div className="max-w-3xl mx-auto">
        <div className="mb-12">
          <span
            style={{
              color: '#5bde8a',
              fontSize: '12px',
              fontWeight: 700,
              letterSpacing: '2px',
              textTransform: 'uppercase',
            }}
          >
            Nutrição
          </span>

          <h1
            style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 900,
              letterSpacing: '-1.5px',
              margin: '10px 0 16px',
              color: 'var(--theme-fg)',
            }}
          >
            Calculadora de Nutrição &amp; TMB
          </h1>

          <p
            style={{
              color: 'var(--theme-muted-foreground)',
              fontSize: '16px',
              lineHeight: 1.75,
              maxWidth: '560px',
            }}
          >
            Insira seus dados para calcular sua Taxa
            Metabólica Basal (TMB) e receba uma
            sugestão personalizada de alimentação
            diária baseada na equação de
            Harris-Benedict.
          </p>
        </div>

        {/* Form */}
        <div
          style={{
            background: 'var(--theme-card)',
            border: '1px solid var(--theme-border)',
            borderRadius: '20px',
            padding: '36px',
            boxShadow: cardShadow,
            transition:
              'background-color 0.3s, border-color 0.3s, box-shadow 0.3s',
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div>
              <label style={labelStyle}>IDADE</label>

              <input
                type="number"
                placeholder="25"
                value={age}
                onChange={(e) =>
                  setAge(e.target.value)
                }
                style={inputStyle}
                onFocus={(e) => {
                  (e.target as HTMLElement).style.borderColor =
                    '#5bde8a';
                  (e.target as HTMLElement).style.boxShadow =
                    '0 0 0 3px rgba(91, 222, 138, 0.12)';
                }}
                onBlur={(e) => {
                  (e.target as HTMLElement).style.borderColor =
                    'var(--theme-border)';
                  (e.target as HTMLElement).style.boxShadow =
                    'none';
                }}
              />
            </div>

            <div>
              <label style={labelStyle}>
                PESO (kg)
              </label>

              <input
                type="number"
                placeholder="70"
                value={weight}
                onChange={(e) =>
                  setWeight(e.target.value)
                }
                style={inputStyle}
                onFocus={(e) => {
                  (e.target as HTMLElement).style.borderColor =
                    '#5bde8a';
                  (e.target as HTMLElement).style.boxShadow =
                    '0 0 0 3px rgba(91, 222, 138, 0.12)';
                }}
                onBlur={(e) => {
                  (e.target as HTMLElement).style.borderColor =
                    'var(--theme-border)';
                  (e.target as HTMLElement).style.boxShadow =
                    'none';
                }}
              />
            </div>

            <div>
              <label style={labelStyle}>
                ALTURA (cm)
              </label>

              <input
                type="number"
                placeholder="175"
                value={height}
                onChange={(e) =>
                  setHeight(e.target.value)
                }
                style={inputStyle}
                onFocus={(e) => {
                  (e.target as HTMLElement).style.borderColor =
                    '#5bde8a';
                  (e.target as HTMLElement).style.boxShadow =
                    '0 0 0 3px rgba(91, 222, 138, 0.12)';
                }}
                onBlur={(e) => {
                  (e.target as HTMLElement).style.borderColor =
                    'var(--theme-border)';
                  (e.target as HTMLElement).style.boxShadow =
                    'none';
                }}
              />
            </div>
          </div>

          {/* Sex */}
          <div className="mb-6">
            <label style={labelStyle}>
              SEXO BIOLÓGICO
            </label>

            <div className="flex gap-4">
              {(
                ['masculino', 'feminino'] as Sex[]
              ).map((s) => (
                <button
                  key={s}
                  onClick={() => setSex(s)}
                  style={{
                    flex: 1,
                    padding: '12px',
                    borderRadius: '10px',
                    fontWeight: 700,
                    fontSize: '14px',
                    cursor: 'pointer',
                    transition: 'all 0.15s',
                    fontFamily:
                      "'Montserrat', sans-serif",
                    background:
                      sex === s
                        ? '#5bde8a'
                        : 'var(--theme-bg)',
                    color:
                      sex === s
                        ? 'var(--theme-primary-fg)'
                        : 'var(--theme-muted-foreground)',
                    border: `1px solid ${
                      sex === s
                        ? '#5bde8a'
                        : 'var(--theme-border)'
                    }`,
                    boxShadow:
                      sex === s
                        ? '0 4px 12px rgba(91, 222, 138, 0.18)'
                        : 'none',
                  }}
                >
                  {s === 'masculino'
                    ? '♂ Masculino'
                    : '♀ Feminino'}
                </button>
              ))}
            </div>
          </div>

          {/* Activity */}
          <div className="mb-8">
            <label style={labelStyle}>
              NÍVEL DE ATIVIDADE FÍSICA
            </label>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
              }}
            >
              {activityOptions.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() =>
                    setActivity(opt.value)
                  }
                  style={{
                    padding: '12px 16px',
                    borderRadius: '10px',
                    cursor: 'pointer',
                    transition: 'all 0.15s',
                    fontFamily:
                      "'Montserrat', sans-serif",
                    background:
                      activity === opt.value
                        ? 'rgba(91, 222, 138, 0.10)'
                        : 'var(--theme-bg)',
                    border: `1px solid ${
                      activity === opt.value
                        ? 'rgba(91, 222, 138, 0.55)'
                        : 'var(--theme-border)'
                    }`,
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    boxShadow:
                      activity === opt.value
                        ? '0 3px 12px rgba(91, 222, 138, 0.08)'
                        : 'none',
                  }}
                >
                  <div className="text-left">
                    <span
                      style={{
                        fontWeight: 700,
                        fontSize: '14px',
                        color:
                          activity === opt.value
                            ? '#5bde8a'
                            : 'var(--theme-fg)',
                        display: 'block',
                      }}
                    >
                      {opt.label}
                    </span>

                    <span
                      style={{
                        fontSize: '12px',
                        color:
                          'var(--theme-muted-foreground)',
                      }}
                    >
                      {opt.desc}
                    </span>
                  </div>

                  <span
                    style={{
                      fontSize: '12px',
                      color:
                        'var(--theme-muted-foreground)',
                      fontWeight: 600,
                    }}
                  >
                    ×{opt.factor}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {error && (
            <div
              style={{
                background:
                  'rgba(255, 80, 80, 0.1)',
                border:
                  '1px solid rgba(255, 80, 80, 0.3)',
                borderRadius: '10px',
                padding: '12px 16px',
                marginBottom: '16px',
              }}
            >
              <p
                style={{
                  color: '#ff8080',
                  fontSize: '14px',
                  fontWeight: 600,
                }}
              >
                ⚠️ {error}
              </p>
            </div>
          )}

          <button
            onClick={handleCalc}
            style={{
              width: '100%',
              background: '#5bde8a',
              color: 'var(--theme-primary-fg)',
              fontWeight: 800,
              fontSize: '16px',
              padding: '16px',
              borderRadius: '12px',
              border: 'none',
              cursor: 'pointer',
              fontFamily:
                "'Montserrat', sans-serif",
              letterSpacing: '-0.3px',
              transition: 'all 0.2s',
              boxShadow:
                '0 6px 16px rgba(91, 222, 138, 0.18)',
            }}
            onMouseEnter={(e) => {
              (e.target as HTMLElement).style.background =
                '#38e07b';
              (e.target as HTMLElement).style.transform =
                'translateY(-1px)';
              (e.target as HTMLElement).style.boxShadow =
                '0 8px 20px rgba(91, 222, 138, 0.25)';
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLElement).style.background =
                '#5bde8a';
              (e.target as HTMLElement).style.transform =
                'translateY(0)';
              (e.target as HTMLElement).style.boxShadow =
                '0 6px 16px rgba(91, 222, 138, 0.18)';
            }}
          >
            Calcular →
          </button>
        </div>

        {/* Result */}
        {result && (
          <div
            style={{
              marginTop: '32px',
              animation: 'fadeIn 0.4s ease',
            }}
          >
            <style>{`
              @keyframes fadeIn {
                from {
                  opacity: 0;
                  transform: translateY(16px);
                }

                to {
                  opacity: 1;
                  transform: translateY(0);
                }
              }
            `}</style>

            {/* TMB / TDEE header */}
            <div
              style={{
                background: 'var(--theme-card)',
                border:
                  '1px solid rgba(91, 222, 138, 0.35)',
                borderRadius: '20px',
                padding: '32px',
                marginBottom: '24px',
                boxShadow: cardShadow,
                transition:
                  'background-color 0.3s, border-color 0.3s, box-shadow 0.3s',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  gap: '6px',
                  alignItems: 'center',
                  marginBottom: '24px',
                }}
              >
                <div
                  style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    background: '#5bde8a',
                    boxShadow:
                      '0 0 10px rgba(91, 222, 138, 0.35)',
                  }}
                />

                <span
                  style={{
                    color: '#5bde8a',
                    fontSize: '12px',
                    fontWeight: 700,
                    letterSpacing: '2px',
                    textTransform: 'uppercase',
                  }}
                >
                  Resultado
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div
                  style={{
                    background: 'var(--theme-bg)',
                    border:
                      '1px solid var(--theme-border)',
                    borderRadius: '14px',
                    padding: '24px',
                    textAlign: 'center',
                    boxShadow: smallCardShadow,
                    transition:
                      'background-color 0.3s, border-color 0.3s',
                  }}
                >
                  <p
                    style={{
                      color:
                        'var(--theme-muted-foreground)',
                      fontSize: '13px',
                      fontWeight: 600,
                      marginBottom: '12px',
                    }}
                  >
                    TMB — Taxa Metabólica Basal
                  </p>

                  <div
                    style={{
                      fontSize: '48px',
                      fontWeight: 900,
                      color: '#5bde8a',
                      letterSpacing: '-2px',
                      lineHeight: 1,
                    }}
                  >
                    {result.tmb.toLocaleString(
                      'pt-BR'
                    )}
                  </div>

                  <div
                    style={{
                      color:
                        'var(--theme-muted-foreground)',
                      fontSize: '14px',
                      marginTop: '6px',
                    }}
                  >
                    kcal/dia em repouso
                  </div>
                </div>

                <div
                  style={{
                    background: 'var(--theme-bg)',
                    border:
                      '1px solid var(--theme-border)',
                    borderRadius: '14px',
                    padding: '24px',
                    textAlign: 'center',
                    boxShadow: smallCardShadow,
                    transition:
                      'background-color 0.3s, border-color 0.3s',
                  }}
                >
                  <p
                    style={{
                      color:
                        'var(--theme-muted-foreground)',
                      fontSize: '13px',
                      fontWeight: 600,
                      marginBottom: '12px',
                    }}
                  >
                    TDEE — Gasto Total Diário
                  </p>

                  <div
                    style={{
                      fontSize: '48px',
                      fontWeight: 900,
                      color: 'var(--theme-fg)',
                      letterSpacing: '-2px',
                      lineHeight: 1,
                    }}
                  >
                    {result.tdee.toLocaleString(
                      'pt-BR'
                    )}
                  </div>

                  <div
                    style={{
                      color:
                        'var(--theme-muted-foreground)',
                      fontSize: '14px',
                      marginTop: '6px',
                    }}
                  >
                    kcal/dia com atividade
                  </div>
                </div>
              </div>
            </div>

            {/* Meal suggestions */}
            <div
              style={{
                background: 'var(--theme-card)',
                border:
                  '1px solid var(--theme-border)',
                borderRadius: '20px',
                padding: '32px',
                boxShadow: cardShadow,
                transition:
                  'background-color 0.3s, border-color 0.3s, box-shadow 0.3s',
              }}
            >
              <h3
                style={{
                  fontWeight: 800,
                  fontSize: '18px',
                  color: 'var(--theme-fg)',
                  marginBottom: '6px',
                  letterSpacing: '-0.5px',
                }}
              >
                Sugestão Alimentar Diária
              </h3>

              <p
                style={{
                  color:
                    'var(--theme-muted-foreground)',
                  fontSize: '14px',
                  marginBottom: '24px',
                }}
              >
                Quantidades aproximadas para manter
                seu peso atual com o nível de atividade
                informado.
              </p>

              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                }}
              >
                {result.meals.map((meal) => (
                  <div
                    key={meal.name}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      background: 'var(--theme-bg)',
                      border:
                        '1px solid var(--theme-border)',
                      borderRadius: '12px',
                      padding: '16px 20px',
                      boxShadow: smallCardShadow,
                      transition:
                        'background-color 0.3s, border-color 0.3s',
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '14px',
                      }}
                    >
                      <span
                        style={{
                          fontSize: '28px',
                        }}
                      >
                        {meal.icon}
                      </span>

                      <span
                        style={{
                          fontWeight: 700,
                          color: 'var(--theme-fg)',
                          fontSize: '15px',
                        }}
                      >
                        {meal.name}
                      </span>
                    </div>

                    <div
                      style={{
                        textAlign: 'right',
                      }}
                    >
                      <div
                        style={{
                          fontWeight: 900,
                          fontSize: '22px',
                          color: '#5bde8a',
                          letterSpacing: '-0.5px',
                        }}
                      >
                        {meal.grams}g
                      </div>

                      <div
                        style={{
                          color:
                            'var(--theme-muted-foreground)',
                          fontSize: '12px',
                        }}
                      >
                        {meal.unit}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div
                style={{
                  marginTop: '20px',
                  background:
                    'rgba(91, 222, 138, 0.08)',
                  border:
                    '1px solid rgba(91, 222, 138, 0.2)',
                  borderRadius: '10px',
                  padding: '14px 18px',
                }}
              >
                <p
                  style={{
                    color:
                      'var(--theme-muted-foreground)',
                    fontSize: '13px',
                    lineHeight: 1.6,
                  }}
                >
                  ⚠️{' '}
                  <strong
                    style={{
                      color: 'var(--theme-fg)',
                    }}
                  >
                    Aviso:
                  </strong>{' '}
                  Estas são estimativas orientativas.
                  Consulte um nutricionista para um
                  plano alimentar personalizado e seguro.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
