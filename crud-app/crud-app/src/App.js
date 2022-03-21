import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import AllUsers from './components/AllUsers';
import AddUser from './components/AddUser';
import EditUser from './components/EditUser';
import NotFound from './components/NotFound'; 
import { BrowserRouter, Routes, Route } from 'react-router-dom';



function App() {
  return (
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/all"element={<AllUsers />}/>
        <Route path="/add"element={<AddUser/>} />
        <Route path="/edit/:id" element={<EditUser />} />
        <Route path="/hhh" element={<NotFound />} />
      </Routes>
      </BrowserRouter>
   
  );
}

export default App;
