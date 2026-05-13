// AudienceStrip.jsx
const AudienceStrip = () => {
  const items = [
    { label: 'Дети', detail: '5–16 лет, шахматные школы' },
    { label: 'Родители', detail: 'сопровождают, интересуются развитием' },
    { label: 'Тренеры', detail: 'действующие и преподаватели школ' },
    { label: 'Любители', detail: 'интеллектуального досуга' },
  ];
  return (
    <section style={{ padding: '64px', background: 'var(--bg-3)' }}>
      <h2 className="sc-h2" style={{ color: 'var(--sc-pink)', marginTop: 0, marginBottom: 40, fontSize: 44 }}>
        Аудитория
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>
        {items.map(it => (
          <div key={it.label} style={{
            background: 'var(--bg-1)', padding: '32px 24px',
            borderLeft: '4px solid var(--sc-pink)',
          }}>
            <div className="sc-body-bold" style={{ marginBottom: 10, fontSize: 18 }}>{it.label}</div>
            <div className="sc-body" style={{ fontSize: 15 }}>{it.detail}</div>
          </div>
        ))}
      </div>
    </section>
  );
};
Object.assign(window, { AudienceStrip });