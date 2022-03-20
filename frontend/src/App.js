import { BrowserRouter, Routes, Route } from "react-router-dom"
// global styles
import "./styles/index.scss"
// Pages
import Home from "./pages/home/Home"
import List from "./pages/list/List"
import New from "./pages/new/New"
// components
import Sidebar from "./components/sidebar/Sidebar"
import Navbar from "./components/navbar/Navbar"
// forms input
import { hotelInputs, newHotelSchema } from "./utils/formSource";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Sidebar />
        <main>
          <Navbar />
          <Routes>
            <Route path="/">
              <Route index element={<Home />} />
              {/* <Route path="login" element={<Login />} /> */}
              <Route path="hotels">
                <Route index element={<List />} />
                {/* <Route path=":hotelId" element={<Single />} /> */}
                <Route
                  path="new"
                  element={ <New inputs={hotelInputs} schema={newHotelSchema} title="Add New Hotel" /> }
                />
              </Route>
            </Route>
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  )
}

export default App
