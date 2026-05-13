// Button.jsx — pink primary, ink secondary
const Button = ({ children, variant = 'primary', onClick, href }) => {
  const styles = {
    primary: { background: 'var(--sc-pink)', color: '#fff', border: 'none' },
    secondary: { background: 'var(--sc-ink)', color: '#fff', border: 'none' },
    ghost:   { background: 'transparent', color: 'var(--sc-ink)', border: '2px solid var(--sc-ink)' },
  };
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 10,
    padding: '14px 22px',
    fontFamily: 'var(--font-display)',
    fontWeight: 700,
    fontSize: 14,
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    borderRadius: 0,
    cursor: 'pointer',
    textDecoration: 'none',
    transition: 'background var(--dur-fast) var(--ease-standard), color var(--dur-fast) var(--ease-standard)',
    ...styles[variant],
  };
  const Tag = href ? 'a' : 'button';
  return (
    <Tag
      href={href}
      onClick={onClick}
      style={base}
      onMouseEnter={(e) => {
        if (variant === 'primary') e.currentTarget.style.background = 'var(--sc-pink-hover)';
      }}
      onMouseLeave={(e) => {
        if (variant === 'primary') e.currentTarget.style.background = 'var(--sc-pink)';
      }}
    >
      {children}
    </Tag>
  );
};
Object.assign(window, { Button });