import { BrowserRouter, Routes, Route } from "react-router-dom"
// global styles
import "./styles/index.scss"
// Pages
import Home from "./pages/home/Home"
// components
import Sidebar from "./components/sidebar/Sidebar"
import Navbar from "./components/navbar/Navbar"

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
        </main>
      </BrowserRouter>
    </div>
  )
}

export default App
