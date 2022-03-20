import { BrowserRouter, Routes, Route } from "react-router-dom"
// global styles
import styles from "./styles/index.scss"
// Pages
import Home from "./pages/home/Home"
// components
import Sidebar from "./components/sidebar/Sidebar"

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Sidebar />
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
  )
}

export default App
