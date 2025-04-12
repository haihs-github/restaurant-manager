import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import Table from './pages/Table';
import Booking from './pages/Booking';
import RecivedBooking from './pages/RecivedBooking';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/table" element={<Table />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/revicedbooking" element={<RecivedBooking />} />
        <Route path="/contact" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
