// Footer.jsx
const Footer = () => (
  <footer>
    <Stripe />
    <div style={{
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      padding: '36px 64px', background: 'var(--bg-1)',
    }}>
      <span className="sc-wordmark" style={{ fontSize: 18 }}>
        <b>SAPIENS</b>CHESS
      </span>
      <span className="sc-caption">© 2026 SapiensChess · Все права защищены</span>
    </div>
  </footer>
);
Object.assign(window, { Footer });