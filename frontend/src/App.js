import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home/Home";

function App() {
  return (
    <div className="app">
      <Sidebar />
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            {/* <Route path="login" element={<Login />} />
            <Route path="hotels">
              <Route index element={<List />} />
              <Route path=":hotelId" element={<Single />} />
              <Route
                path="new"
                element={ <New inputs={hotelInputs} title="Add New Hotel" /> }
              />
            </Route> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
