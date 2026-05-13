// BenefitsGrid.jsx
const BenefitsGrid = () => {
  const groups = [
    {
      title: 'Для ТЦ, музеев, парков',
      items: [
        'поток платёжной аудитории',
        'уникальные сценарии вовлечения',
        'имидж интеллектуального пространства',
        'готовый контент и анонсы',
      ],
    },
    {
      title: 'Для ресторанов, кафе, галерей',
      items: [
        'повышение среднего чека',
        'дополнительное время пребывания',
        'имидж тёплого пространства',
        'прямой охват аудитории',
      ],
    },
  ];
  return (
    <section style={{ padding: '96px 64px', background: 'var(--bg-1)' }}>
      <h2 className="sc-h1" style={{ fontSize: 56, marginTop: 0, marginBottom: 56 }}>
        Преимущества<br/>для площадок
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, marginBottom: 56 }}>
        {groups.map(g => (
          <div key={g.title}>
            <div className="sc-h4" style={{ marginBottom: 16 }}>{g.title}</div>
            <ul className="sc-list" style={{ fontSize: 17 }}>
              {g.items.map(it => <li key={it}>{it}</li>)}
            </ul>
          </div>
        ))}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14 }}>
        {[0,1,2,3].map(i => (
          <div key={i} style={{ aspectRatio: '1', background: 'var(--sc-n-300)', overflow: 'hidden' }}>
            <img src="../../assets/placeholder-square.jpg" alt="" style={{
              width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(1)'
            }} />
          </div>
        ))}
      </div>
    </section>
  );
};
Object.assign(window, { BenefitsGrid });