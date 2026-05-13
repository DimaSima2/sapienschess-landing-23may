// App.jsx — composes the marketing one-pager
const App = () => (
  <main style={{ background: 'var(--bg-1)', minHeight: '100vh' }}>
    <Stripe height={10} />
    <Header />
    <Hero />
    <AudienceStrip />
    <FormatBlock />
    <BenefitsGrid />
    <Contact />
    <Footer />
  </main>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);