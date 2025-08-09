import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import './App.css';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import TopNavbar from './components/landingComponents/TopNavbar';
import Footer from './components/landingComponents/Footer';
import Home from './components/landingComponents/Home';
import About from './components/landingComponents/About';
import Services from './components/landingComponents/Services';
import Property from './components/landingComponents/Property';
import UserRegister from './components/landingComponents/UserRegister';
import ContactForm from './components/landingComponents/ContactForm';
import Login from './components/landingComponents/Login';

import AddProperty from './components/AdminComponents/AddProperty';
import AdminPropertyList from './components/AdminComponents/AdminPropertyList';
import AdminSoldProperty from './components/AdminComponents/AdminSoldProperty';
import UserList from './components/AdminComponents/UserList';
import AdminProfile from './components/AdminComponents/AdminProfile';
import AdminContactUsList from './components/AdminComponents/AdminContactUsList';

import UserBoughtList from './components/userComponents/UserBoughtList';
import UserProfile from './components/userComponents/UserProfile';

import NotFound from './NotFound';

const AppRoutes = () => {
  const location = useLocation();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('userInfo'));
    setUserData(user);
  }, [location]);

  return (
    <>
      <TopNavbar />

      <Routes>
        {/* Public Routes */}
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/property' element={<Property />} />
        <Route path='/contact' element={<ContactForm />} />
        <Route path='/register' element={<UserRegister />} />
        <Route path='/login' element={<Login />} />

        {/* Admin Routes */}
        {userData?.userType === 'admin' && (
          <>
            <Route path='/admin-add' element={<AddProperty />} />
            <Route path='/admin-list' element={<AdminPropertyList />} />
            <Route path='/admin-sold' element={<AdminSoldProperty />} />
            <Route path='/admin-user' element={<UserList />} />
            <Route path='/admin-profile' element={<AdminProfile />} />
            <Route path='/admin-contact' element={<AdminContactUsList />} />
          </>
        )}

        {/* User Routes */}
        {userData?.userType === 'user' && (
          <>
            <Route path='/user-property' element={<Property />} />
            <Route path='/user-bought-list' element={<UserBoughtList />} />
            <Route path='/user-profile' element={<UserProfile />} />
          </>
        )}

        {/* Fallback */}
        <Route path='*' element={<NotFound />} />
      </Routes>

      <Footer />
    </>
  );
};

function App() {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,
    });
  }, []);

  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
