// Contact.jsx — director card + phone + QR placeholder
const Contact = () => (
  <section id="Контакты" style={{
    padding: '96px 64px', background: 'var(--sc-ink)', color: '#fff',
  }}>
    <div className="sc-eyebrow" style={{ marginBottom: 14, color: 'var(--sc-pink)' }}>Всегда на связи</div>
    <h2 className="sc-h1" style={{ fontSize: 64, marginTop: 0, marginBottom: 64, color: '#fff' }}>
      Станьте частью среды,<br/>в которой растут лидеры
    </h2>
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr auto', gap: 64, alignItems: 'center' }}>
      <div>
        <div className="sc-eyebrow" style={{ color: 'var(--sc-pink)', marginBottom: 10 }}>
          Директор по развитию
        </div>
        <div style={{ fontFamily: 'var(--font-display)', fontSize: 28, marginBottom: 6 }}>
          Олеся Александрова
        </div>
        <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 28 }}>
          +7 (925) 787-30-22
        </div>
      </div>
      <div>
        <div className="sc-eyebrow" style={{ color: 'var(--sc-pink)', marginBottom: 10 }}>
          Написать
        </div>
        <a href="mailto:partner@sapienschess.ru" style={{
          fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 24,
          color: '#fff', textDecoration: 'underline', textUnderlineOffset: 6,
        }}>partner@sapienschess.ru</a>
      </div>
      <div style={{
        width: 160, height: 160,
        background: 'repeating-conic-gradient(#fff 0% 25%, #0A0A0A 0% 50%)',
        backgroundSize: '20px 20px',
        border: '6px solid #fff',
      }} aria-label="QR placeholder" />
    </div>
  </section>
);
Object.assign(window, { Contact });