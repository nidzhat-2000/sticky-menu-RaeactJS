import { Menu } from "./Menus/Menu";
import { FullMenu } from "./Menus/FullMenu";
import { VerticalMenu } from "./Menus/VerticalMenu";

function App() {
  return (
    <div className="App">
      <Menu />
      <FullMenu />
      <VerticalMenu />
    </div>
  );
}

export default App;
