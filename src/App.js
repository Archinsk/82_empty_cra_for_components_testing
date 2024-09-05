import React from "react";
import Icon from "./components/universal/Icon";
import Button from "./components/universal/Button";
import Badge from "./components/universal/Badge";

function App() {
  const defaultBadge = {
    theme: "danger",
    pill: false,
    notNullDisplay: true,
    value: 25,
    max: 99,
  };

  return (
    <div className="App">
      <h2>Empty CRA-project</h2>
      <div className="use-case-title">Иконка (в тексте)</div>
      <div>
        Lor
        <Icon name="favorite" />
        em ip
        <Icon name="star" />
        sum dolor.
      </div>
      <div className="use-case-title">Значок (в тексте)</div>
      <div>
        Lorem <Badge>ipsum</Badge> dolor.
      </div>
      <div className="use-case-title">Кнопка</div>
      <Button>Default</Button>
      <div className="use-case-title">
        Кнопка с указанием размера ("small" или "large")
      </div>
      <Button size="small">Маленькая</Button>
      <Button>Обычная</Button>
      <Button size="large">Большая</Button>
      <div className="use-case-title">Кнопка блочная</div>
      <Button block>На всю ширину</Button>
      <div className="use-case-title">Кнопка с иконкой</div>
      <Button icon="star" size="small">
        В избранное
      </Button>
      <Button theme="primary" icon="star" className="me-3">
        В избранное
      </Button>
      <Button theme="primary" icon="star" size="large">
        В избранное
      </Button>
      <div className="use-case-title">Кнопка квадратная</div>
      <Button theme="warning" square size="small" className="me-3">
        Ш
      </Button>
      <Button theme="warning" square className="me-3">
        Ш
      </Button>
      <Button theme="warning" square size="large">
        Ш
      </Button>
      <div className="use-case-title">Кнопка квадратная с иконкой</div>
      <Button
        theme="danger"
        icon="favorite"
        square
        size="small"
        className="me-3"
      />
      <Button theme="danger" icon="favorite" square className="me-3" />
      <Button theme="danger" icon="favorite" square size="large" />
      <div className="use-case-title">Кнопка со значком</div>
      <Button
        theme="secondary"
        size="small"
        className="me-3"
        badge={defaultBadge}
      >
        Маленькая
      </Button>
      <Button theme="secondary" className="me-3" badge={defaultBadge}>
        Обычная
      </Button>
      <Button theme="secondary" size="large" badge={defaultBadge}>
        Большая
      </Button>
    </div>
  );
}

export default App;
