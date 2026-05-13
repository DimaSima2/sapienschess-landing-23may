// Hero.jsx
const Hero = () => (
  <section style={{
    display: 'grid', gridTemplateColumns: '1.1fr 0.9fr',
    gap: 64, padding: '96px 64px 64px',
    alignItems: 'center',
  }}>
    <div>
      <div className="sc-eyebrow" style={{ marginBottom: 18 }}>Партнёрская программа</div>
      <h1 className="sc-h1" style={{ fontSize: 76, margin: 0, marginBottom: 28 }}>
        Создаём яркие<br/>события в мире<br/>шахмат
      </h1>
      <p className="sc-body-lg" style={{ maxWidth: 520, marginBottom: 36 }}>
        SapiensChess — про людей, которых объединяет интеллект, а не обстоятельства.
        Мы строим сообщество вокруг турниров, школ и интеллектуального досуга.
      </p>
      <div style={{ display: 'flex', gap: 14 }}>
        <Button>Стать партнёром</Button>
        <Button variant="ghost">Смотреть формат</Button>
      </div>
    </div>
    <div style={{
      position: 'relative',
      aspectRatio: '1 / 1',
      background: 'var(--sc-n-300)',
      overflow: 'hidden',
    }}>
      <img
        src="../../assets/placeholder-square.jpg"
        alt=""
        style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(1) contrast(1.05)' }}
      />
      <div style={{
        position: 'absolute', left: 24, bottom: 24,
        background: 'var(--sc-pink)', color: '#fff',
        padding: '10px 18px', fontFamily: 'var(--font-display)',
        fontWeight: 900, fontSize: 14, letterSpacing: '0.08em',
        textTransform: 'uppercase',
      }}>Шахматная лига Сберсити · 2026</div>
    </div>
  </section>
);
Object.assign(window, { Hero });