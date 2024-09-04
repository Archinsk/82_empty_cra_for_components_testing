import React from "react";
import Button from "./components/universal/Button";

function App() {
  return (
    <div className="App">
      <div>Empty CRA-project</div>
      <Button>Default</Button>
      <Button square>X</Button>
      <Button icon="favorite" square />
    </div>
  );
}

export default App;
