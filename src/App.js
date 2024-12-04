import { Routes, Route } from "react-router-dom";

import Registration from "./pages/registration/Registration"

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/registration" element={<Registration />} />
          <Route path="/" />
      </Routes>
    </div>
  );
}

export default App;
