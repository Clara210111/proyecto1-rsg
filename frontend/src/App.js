import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import MainPage from './components/MainPage/MainPage';
import TransferForm from './components/TransferForm/TransferForm';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="/transfer" element={<TransferForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
