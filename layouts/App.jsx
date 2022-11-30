import React from 'react';
import { Routes, Route } from 'react-router-dom';
import loadable from '@loadable/component';
import './Reset.css'

import NavBar from '@components/NavBar/NavBar';
import Footer from '@components/Footer/Footer';

const LandingPage = loadable(() => import('@pages/LandingPage/LandingPage'));
const Profile = loadable(() => import('@pages/Profile/Profile'));
const Skills = loadable(() => import('@pages/Skills/Skills'));
const Projects = loadable(() => import('@pages/Projects/Projects'));
const Contact = loadable(() => import('@pages/Contact/Contact'));

const App = () => {
  
  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/skill" element={<Skills />}></Route>
        <Route path="/project" element={<Projects />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
