// Stripe.jsx — the alternating pink/mint/gray band
const Stripe = ({ height = 14 }) => (
  <div className="sc-stripe" style={{ height }}>
    <span className="gray" />
    <span className="mint" style={{ flex: 0.6 }} />
    <span className="gray" style={{ flex: 0.4 }} />
    <span className="pink" style={{ flex: 0.6 }} />
    <span className="gray" />
    <span className="ink" style={{ flex: 0.3, background: 'var(--sc-black)' }} />
    <span className="gray" />
    <span className="mint" style={{ flex: 0.6 }} />
    <span className="gray" style={{ flex: 0.5 }} />
    <span className="pink" style={{ flex: 0.4 }} />
    <span className="gray" />
  </div>
);

Object.assign(window, { Stripe });