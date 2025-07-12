// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Destinations from './pages/Destinations';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import DestinationDetail from './pages/DestinationDetail';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile'; // New profile page
import { AuthProvider, useAuth } from './contexts/AuthContext';
import './styles/Navbar.css';
import './styles/Footer.css';
import './styles/App.css';

// Protected Route component
const ProtectedRoute = () => {
  const { currentUser } = useAuth();
  return currentUser ? <Outlet /> : <Navigate to="/login" replace />;
};

// Public Route component (for auth pages when user is already logged in)
const PublicRoute = () => {
  const { currentUser } = useAuth();
  return currentUser ? <Navigate to="/" replace /> : <Outlet />;
};

// Layout component for pages with navbar and footer
const MainLayout = () => {
  return (
    <div className="app">
      <Navbar />
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

// Auth Layout component (without navbar and footer)
const AuthLayout = () => {
  return (
    <div className="auth-page">
      <Outlet />
    </div>
  );
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Auth routes without layout */}
          <Route element={<AuthLayout />}>
            <Route element={<PublicRoute />}>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Route>
          </Route>

          {/* Main routes with layout */}
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/destinations" element={<Destinations />} />
            <Route path="/destination/:id" element={<DestinationDetail />} />
            <Route path="/contact" element={<Contact />} />
            
            {/* Protected routes */}
            <Route element={<ProtectedRoute />}>
              <Route path="/blog" element={<Blog />} />
              <Route path="/profile" element={<Profile />} />
            </Route>
          </Route>

          {/* 404 Not Found */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;