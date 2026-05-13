// FormatBlock.jsx — МЫ / ВЫ partnership split
const FormatBlock = () => (
  <section style={{ padding: '96px 64px' }}>
    <div className="sc-eyebrow" style={{ marginBottom: 14 }}>Формат сотрудничества</div>
    <h2 className="sc-h1" style={{ fontSize: 56, marginTop: 0, marginBottom: 56, maxWidth: 900 }}>
      Не просто мероприятие,<br/>а инструмент развития
    </h2>
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 96 }}>
      <div>
        <div className="sc-h4" style={{ marginBottom: 18 }}>Мы</div>
        <ul className="sc-list" style={{ fontSize: 18 }}>
          <li>даём площадку и аудиторию</li>
          <li>приглашаем вас как эксперта</li>
          <li>создаём сильное событие</li>
          <li>обеспечиваем фото, видео и трансляции</li>
        </ul>
      </div>
      <div>
        <div className="sc-h4" style={{ marginBottom: 18 }}>Вы</div>
        <ul className="sc-list" style={{ fontSize: 18 }}>
          <li>выступаете как спикер</li>
          <li>приглашаете своих учеников</li>
          <li>становитесь частью среды</li>
        </ul>
      </div>
    </div>
  </section>
);
Object.assign(window, { FormatBlock });