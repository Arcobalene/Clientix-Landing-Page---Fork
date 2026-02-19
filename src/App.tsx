import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ProblemSection } from './components/ProblemSection';
import { SolutionSection } from './components/SolutionSection';
import { HowItWorks } from './components/HowItWorks';
import { Benefits } from './components/Benefits';
import { ForWhom } from './components/ForWhom';
import { Pricing } from './components/Pricing';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { BookingPage } from './pages/BookingPage';
import { AuthPage } from './pages/AuthPage';
import { SalonDashboard } from './pages/SalonDashboard';
import { ClientDashboard } from './pages/ClientDashboard';
import { MasterDashboard } from './pages/MasterDashboard';
import { AdminDashboard } from './pages/AdminDashboard';
function LandingPage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <HowItWorks />
      <Benefits />
      <ForWhom />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
    </>);

}
export function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen w-full bg-white">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/login" element={<AuthPage />} />
          <Route path="/register" element={<AuthPage />} />
          <Route path="/salon" element={<SalonDashboard />} />
          <Route path="/client" element={<ClientDashboard />} />
          <Route path="/master" element={<MasterDashboard />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </div>
    </BrowserRouter>);

}