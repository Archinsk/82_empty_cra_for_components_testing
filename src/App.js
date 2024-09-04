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
      <div>Empty CRA-project</div>
      <div className="use-case-title">Icon (in text)</div>
      <div>
        Lor
        <Icon name="favorite" />
        em ip
        <Icon name="star" />
        sum dolor.
      </div>
      <div className="use-case-title">Badge (in text)</div>
      <div>
        Lorem <Badge>ipsum</Badge> dolor.
      </div>
      <div className="use-case-title">Button (default)</div>
      <Button>Default</Button>
      <div className="use-case-title">Button square</div>
      <Button square>X</Button>
      <Button icon="favorite" square />
      <div className="use-case-title">
        С указанием размера (только "small" и "large")
      </div>
      <Button theme="secondary" size="small" className="me-3">
        Маленькая
      </Button>
      <Button theme="secondary" className="me-3">
        Обычная
      </Button>
      <Button theme="secondary" size="large">
        Большая
      </Button>
      <div className="use-case-title">
        Блочная (на всю ширину родительского элемента)
      </div>
      <Button theme="primary" block>
        На всю ширину
      </Button>
      <div className="use-case-title">С иконкой</div>
      <Button theme="primary" icon="star" size="small" className="me-3">
        В избранное
      </Button>
      <Button theme="primary" icon="star" className="me-3">
        В избранное
      </Button>
      <Button theme="primary" icon="star" size="large">
        В избранное
      </Button>
      <div className="use-case-title">Квадратная</div>
      <Button theme="warning" square size="small" className="me-3">
        Ш
      </Button>
      <Button theme="warning" square className="me-3">
        Ш
      </Button>
      <Button theme="warning" square size="large">
        Ш
      </Button>
      <div className="use-case-title">Квадратная с иконкой</div>
      <Button
        theme="danger"
        icon="favorite"
        square
        size="small"
        className="me-3"
      />
      <Button theme="danger" icon="favorite" square className="me-3" />
      <Button theme="danger" icon="favorite" square size="large" />
      <div className="use-case-title">С бэйджем</div>
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
