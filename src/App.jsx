import './styles/Pages.css'

import {Route, BrowserRouter as Router, Routes}  from 'react-router-dom';

import './App.css';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import CoursePage from './Pages/CoursePage';
import ContactPage from './Pages/ContactPage';
import AdmissionPage from './Pages/AdmissionPage';
import ChatbotComponent from './components/Chatbot/ChatbotComponent';

const App = () => {
  return (
    <div>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/course" element={<CoursePage />} />
            <Route path="/addmission" element={<AdmissionPage/>} />
          </Routes>
          <ChatbotComponent/>
        </Router>
    
    </div>
  );

}

export default App;