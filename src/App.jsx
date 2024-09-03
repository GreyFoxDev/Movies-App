import { Outlet } from "react-router-dom";

import "./index.scss";

function App() {
  return (
    <div className="movies-app">
      <Outlet />
    </div>
  );
}

export default App;
