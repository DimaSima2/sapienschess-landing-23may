// Header.jsx
const Header = () => {
  const nav = ['Программа', 'Формат', 'Лига', 'Контакты'];
  return (
    <header style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '24px 64px',
      borderBottom: '1px solid var(--rule)',
      background: 'var(--bg-1)',
      position: 'sticky', top: 0, zIndex: 10,
    }}>
      <a href="#" className="sc-wordmark" style={{ fontSize: 22, textDecoration: 'none' }}>
        <b>SAPIENS</b>CHESS
      </a>
      <nav style={{ display: 'flex', gap: 36 }}>
        {nav.map(n => (
          <a key={n} href={'#' + n} style={{
            fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 13,
            letterSpacing: '0.08em', textTransform: 'uppercase',
            color: 'var(--fg-1)', textDecoration: 'none',
          }}>{n}</a>
        ))}
      </nav>
      <Button>Стать партнёром</Button>
    </header>
  );
};
Object.assign(window, { Header });